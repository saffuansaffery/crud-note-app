import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Notes',
  description: 'made by saffuan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='p-3 text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
          <a href='/' className='m-2'>Home</a>
          <a href='/notes' className='m-2'>Notes</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
