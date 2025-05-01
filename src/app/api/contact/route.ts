import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import sanitizeHtml from "sanitize-html"    // npm install sanitize-html

const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    EMAIL_TO
} = process.env

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    throw new Error("Missing SMTP configuration in environment")
}

// Simple in‑memory rate limiter (5 requests per minute per IP)
const RATE_LIMIT = 5
const WINDOW_MS = 60 * 1000
const rateMap = new Map<string, { count: number; firstRequest: number }>()

function isRateLimited(ip: string) {
    const now = Date.now()
    const entry = rateMap.get(ip)
    if (!entry) {
        rateMap.set(ip, { count: 1, firstRequest: now })
        return false
    }
    if (now - entry.firstRequest > WINDOW_MS) {
        rateMap.set(ip, { count: 1, firstRequest: now })
        return false
    }
    entry.count++
    return entry.count > RATE_LIMIT
}

// Validate email with basic regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS }
})

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get("CF-Connecting-IP")?.trim() || "unknown"
        if (isRateLimited(ip)) {
            return NextResponse.json({ error: "Too many requests" }, { status: 429 })
        }

        const { name, email, message } = await request.json()

        // Basic presence & length checks
        if (
            !name || typeof name !== "string" || name.length > 100 ||
            !email || typeof email !== "string" || email.length > 100 ||
            !message || typeof message !== "string" || message.length > 2000
        ) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 })
        }

        // Prevent CRLF injection
        if (/[\r\n]/.test(name) || /[\r\n]/.test(email)) {
            return NextResponse.json({ error: "Invalid characters in input" }, { status: 400 })
        }

        if (!EMAIL_REGEX.test(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
        }

        // Sanitize HTML to avoid XSS
        const cleanName = sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} })
        const cleanMessage = sanitizeHtml(message, {
            allowedTags: ["b", "i", "em", "strong", "a", "p", "br"],
            allowedAttributes: { a: ["href", "target"] },
            allowedSchemes: ["http", "https", "mailto"]
        })

        const mailOptions = {
            from: `"${cleanName}" <${email}>`,
            to: EMAIL_TO,
            subject: `New contact from ${cleanName}`,
            text: cleanMessage.replace(/<br\s*\/?>/gi, "\n").replace(/<\/?[^>]+(>|$)/g, ""),
            html: `
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        ${cleanMessage.split("\n").map(l => `<p>${l}</p>`).join("")}
      `
        }

        await transporter.sendMail(mailOptions)
        return NextResponse.json({ success: true })
    } catch (err) {
        if (err instanceof Error) {
            console.error("Contact API error:", err)
            return NextResponse.json(
                { error: err.message || "Failed to send message" },
                { status: 500 }
            )
        }
    }
}