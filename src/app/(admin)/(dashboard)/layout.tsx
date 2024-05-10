import { inter, telma } from '../../fonts/index'

import '../../../styles/globals.css'
import { AdminNavbar } from '@/components/admin/navbarComponent'
import clsx from 'clsx'

export const metadata = {
  title: 'Sabor com Amor - Admin',
  description: 'Página de gerenciamento de produtos',
  icons: {
    icon: '/logo.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={clsx(inter.className, telma.variable, 'font-sans antialiased bg-zinc-100 ')}>
        <AdminNavbar />
        {children}
      </body>
    </html>
  )
}
