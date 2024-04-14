import { Inter } from 'next/font/google';

import '../../styles/globals.css';

const inter = Inter({
  weight: '400',
  subsets: ['latin']
});

export const metadata = {
  title: 'Sabor com Amor',
  description: 'Sabor com Amor landing page'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-zinc-900" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}