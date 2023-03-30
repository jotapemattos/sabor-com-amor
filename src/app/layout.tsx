import '../styles/globals.css';

export const metadata = {
  title: 'Sabor com Amor',
  description: 'Comidas caseiras com amor.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
