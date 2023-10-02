import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanghulu',
  description: "The world's sweetest cryptocurrency",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=M+PLUS+1p:wght@400;800;900&display=swap" rel="stylesheet"></link>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
