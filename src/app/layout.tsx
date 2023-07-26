import Script from 'next/script';
import './globals.css';
// import CheckTheme from './HelperFunctions/CheckTheme';
import type { Metadata } from 'next';
import { Syne, Rubik } from 'next/font/google'

const syne = Syne({ 
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-syne'
})

const rubik = Rubik({ 
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  title: 'Synapsis',
  description: 'Tell the world and it will listen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='en' id='app'>
      {/* <CheckTheme /> */}
      <body className={`${syne.variable} ${rubik.variable}`}>
        {children}
      </body>
    </html>
  )
}
