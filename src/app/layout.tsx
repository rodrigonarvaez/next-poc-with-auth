import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import Link from 'next/link'

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
        <header className="py-2">
          <div className="flex items-baseline justify-between">
            <h1 className="text-3xl font-bold">POC</h1>
          </div>
        </header>
        <main className="grow">{children}</main>
        <footer className="py-2 text-xs">
          <p className="text-center">
            A POC for NextJs with Tailwind, Typescript and Authjs.
          </p>
        </footer>
      </body>
    </html>
  )
}
