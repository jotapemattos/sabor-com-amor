import '../../styles/globals.css'
import { geist } from '../fonts'

export const metadata = {
  title: 'Sabor com Amor',
  description: 'Sabor com Amor landing page'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={geist.className}>
      <body className="bg-zinc-900" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
