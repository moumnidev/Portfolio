import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  metadataBase: new URL("https://moumni.dev"),
  title: {
    default: "MoumniDev – Professional Full‑Stack Developer Portfolio",
    template: "%s | MoumniDev",
  },
  description: "MoumniDev – Professional Full‑Stack & Front‑End Developer. React, Next.js, TailwindCSS, Node.js.",
  keywords: [
    "Full‑Stack Developer", "Front‑End Developer", "React", "Next.js",
    "TailwindCSS", "Node.js", "API", "Portfolio", "Web Development", "SEO"
  ],
  authors: [{ name: "MoumniDev", url: "https://moumni.dev" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://moumni.dev/",
    languages: {
      "en-US": "https://moumni.dev/",
      "fr-FR": "https://moumni.dev/"
    }
  },
  openGraph: {
    title:    "MoumniDev – Professional Full‑Stack Developer Portfolio",
    description: "Explore my projects built with React, Next.js, TailwindCSS, and Node.js.",
    url:      "https://moumni.dev/",
    siteName: "MoumniDev",
    type:     "website",
    locale:   "en_US",
    images: [
      {
        url:    "https://moumni.dev/og-image.png",
        width:  1536,
        height: 1024,
        alt:    "MoumniDev Portfolio"
      }
    ]
  },
  twitter: {
    card:        "summary_large_image",
    title:       "MoumniDev – Full‑Stack Developer Portfolio",
    description: "React · Next.js · TailwindCSS · Node.js · API · SEO‑optimized",
    site:        "@moumni_dev",
    creator:     "@moumni_dev",
    images:      ["https://moumni.dev/twitter-card.png"]
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-gray-100 overflow-x-hidden">
        <Navbar />
        {/* JSON‑LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Moumni Dev",
              url: "https://moumni.dev",
              jobTitle: "Full‑Stack Developer",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourprofile"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "FR"
              }
            })
          }}
        />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
