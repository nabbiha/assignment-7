import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Fetching Assignment',
  description: 'An assignment demonstrating client-side and server-side data fetching',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto p-4 min-h-[calc(100vh-144px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

