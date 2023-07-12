import './globals.css'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

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
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </body>
    </html>
  )
}
