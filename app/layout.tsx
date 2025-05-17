import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransitionProvider } from "@/components/page-transition-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Explore India - Travel Like Never Before",
  description: "Discover the beauty, culture, and heritage of India with our immersive travel experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PageTransitionProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </PageTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
