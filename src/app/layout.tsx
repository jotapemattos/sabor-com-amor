import { Space_Grotesk } from 'next/font/google';

import { NavBar } from '@/components/NavBarComponent';

import '../styles/globals.css';

const space_grotesk = Space_Grotesk({
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
    <html lang="pt-BR" className={space_grotesk.className}>
      <body className="body">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
