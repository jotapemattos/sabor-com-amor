import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="w-screen h-20 fixed inset-0 bg-transparent backdrop-blur-lg flex items-center justify-around">
      <img
        src="/logo.svg"
        alt="logo-image"
        className="w-16 h-16 rounded-full"
      />
      <span className="flex gap-20 items-center">
        <Link href={'/'}>
          <p>Sobre</p>
        </Link>
        <Link href={'/produtos'}>
          <p>Produtos</p>
        </Link>
        <p>Encomendas</p>
      </span>
    </nav>
  );
}
