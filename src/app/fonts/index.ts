import localFont from 'next/font/local'

import { GeistSans } from 'geist/font/sans'

export const papyrus = localFont({
  src: './papyrus.ttf',
  variable: '--font-papyrus'
})

export const geist = GeistSans
