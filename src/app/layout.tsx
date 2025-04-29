import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "MoumniDev Portfolio",
    description: "Professional Full-Stack Developer Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-gray-900 text-gray-100">
                <Navbar />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </main>
            </body>
        </html>
    );
}
