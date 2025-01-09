import { Lato } from 'next/font/google'
import './globals.css'
 
const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lato.className}>
      <body className='antialiased bg-[#EAEEFE]'>{children}</body>
    </html>
  )
}