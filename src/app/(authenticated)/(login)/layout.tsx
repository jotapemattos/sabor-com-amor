import { geist, papyrus } from '@/app/fontsComponent'
import clsx from 'clsx'
import { Toaster } from 'sonner'
import '../../../styles/globals.css'

export const metadata = {
  title: {
    default: 'Sabor com Amor',
    template: '%s | Sabor com Amor'
  },
  description: 'Página de login'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={clsx(geist.className, papyrus.variable, 'antialiased bg-noise-texture')}>
        <Toaster richColors position="bottom-center" />
        {children}
      </body>
    </html>
  )
}
