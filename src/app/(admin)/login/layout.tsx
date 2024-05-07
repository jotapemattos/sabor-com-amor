import { inter, telma } from '../../fonts'

import '../../../styles/globals.css'
import clsx from 'clsx'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Sabor com Amor - Login',
  description: 'Página de login',
  icons: {
    icon: '/logo.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={clsx(inter.className, telma.variable, 'antialiased bg-noise-texture')}>
        <Toaster richColors position="bottom-center" />
        {children}
      </body>
    </html>
  )
}
