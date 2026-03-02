import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Purple Movement | Uniting Purposeful People Worldwide',
  description: 'The Purple Movement is a global force of purposeful people, changemakers, and visionaries, coming together to create a borderless future full of impact and possibility.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${montserrat.variable} ${poppins.variable} bg-background font-poppins`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
