import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProviders from '@/components/ClientProviders'

 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'LingoLoom',
  description: 'Chat with anyone, anywhere!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
    <html lang="en">
      
      <body className={roboto.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <Header/>
        {children}
        
        </ThemeProvider>
        </body>
    </html>
    </ClientProviders>
  )
}
