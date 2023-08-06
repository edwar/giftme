import './globals.css'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Gift App',
  description: 'Tienda de tarjetas virtuales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={poppins.variable}>
        <NextAuthProvider>
          <NavBar />
          <div className='container mx-auto max-w-[1600px] px-4 pt-10'>
            {children}
          </div>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
