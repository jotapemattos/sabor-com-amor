import { Suspense } from 'react'

import { geist, papyrus } from '../../fonts/index'

import '../../../styles/globals.css'
import { AdminSidebar } from '@/components/admin/admin-sidebarComponent'
import { MobileNavBar } from '@/components/admin/mobile-navbarComponent'
import Providers from '@/components/providersComponent'
import clsx from 'clsx'
import { Toaster } from 'sonner'

export const metadata = {
  title: {
    default: 'Sabor com Amor',
    template: '%s | Sabor com Amor'
  },
  description: 'Página de gerenciamento de produtos'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={clsx(geist.className, papyrus.variable, 'antialiased bg-zinc-100')}>
        <Providers>
          <Toaster position="top-center" richColors />
          <MobileNavBar />
          <AdminSidebar />
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  )
}
