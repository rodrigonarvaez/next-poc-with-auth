import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Next POC with Auth',
  description: 'A POC for Next.js with Auth',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col gap-2 px-2 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
