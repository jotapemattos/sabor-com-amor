import { geist, papyrus } from '../../fonts/index'

import '../../../styles/globals.css'
import { AdminNavbar } from '@/components/admin/navbarComponent'
import Providers from '@/components/providersComponent'
import clsx from 'clsx'
import { Toaster } from 'sonner'

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
      <body className={clsx(geist.className, papyrus.variable, 'antialiased bg-zinc-100 ')}>
        <Providers>
          <Toaster position="top-center" richColors />
          <AdminNavbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
