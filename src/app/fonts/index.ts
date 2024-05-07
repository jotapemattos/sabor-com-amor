import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const telma = localFont({
  src: './Telma-Regular.otf',
  variable: '--font-telma'
})

export const inter = Inter({ subsets: ['latin'] })
