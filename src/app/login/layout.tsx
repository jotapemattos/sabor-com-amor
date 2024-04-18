import { inter, telma } from '../fonts';

import '../../styles/globals.css';
import clsx from 'clsx';

export const metadata = {
  title: 'Sabor com AMor - Login',
  description: 'Página de login',
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={clsx(
          inter.className,
          telma.variable,
          'antialiased bg-noise-texture'
        )}
      >
        {children}
      </body>
    </html>
  );
}
