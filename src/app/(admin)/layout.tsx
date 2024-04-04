import { Inter } from 'next/font/google';

import '../../styles/globals.css';

const inter = Inter({
  weight: '400',
  subsets: ['latin']
});

export const metadata = {
  title: 'Sabor com Amor - Admin',
  description: 'Página de gerenciamento de produtos'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="body" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
