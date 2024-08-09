import { geist, papyrus } from '../fonts'

import '../../styles/globals.css'
import { Navbar } from '@/components/site/navbarComponent'
import clsx from 'clsx'

export const metadata = {
  title: 'Sabor com Amor',
  description: 'Sabor com Amor landing page'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={clsx(
          geist.className,
          papyrus.variable,
          'antialiased bg-noise-texture bg-zinc-100 flex flex-col justify-center items-center mt-4'
        )}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
