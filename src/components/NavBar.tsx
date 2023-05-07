import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="w-screen h-24 fixed z-20 inset-0 bg-transparent backdrop-blur-lg flex items-center justify-around shadow-xl">
      <img
        src="/logo.svg"
        alt="logo-image"
        className="w-16 h-16 rounded-full"
      />
      <span className="flex gap-20 items-center text-white font-bold">
        <Link href={'/'}>
          <p className="hover:text-[#694A43] transition-colors duration-300">
            Sobre
          </p>
        </Link>
        <Link href={'/produtos'}>
          <p className="hover:text-[#694A43] transition-colors duration-300">
            Produtos
          </p>
        </Link>
        <Link href={'/encomendas'}>
          <p className="hover:text-[#694A43] transition-colors duration-300">
            Encomendas
          </p>
        </Link>
      </span>
    </nav>
  );
}
