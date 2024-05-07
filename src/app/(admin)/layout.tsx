import { inter, telma } from '../fonts/index'

import '../../styles/globals.css'
import clsx from 'clsx'

export const metadata = {
  title: 'Sabor com Amor - Admin',
  description: 'Página de gerenciamento de produtos'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={clsx(inter.className, telma.variable, 'font-sans antialiased bg-noise-texture')}>
        {children}
      </body>
    </html>
  )
}
