'use client';

import Link from 'next/link';

import HamburgerIcon from './HamburguerIcon';

export function NavBar() {
  return (
    <nav className="header w-screen h-24 fixed z-20 inset-0 flex items-center justify-between lg:justify-around p-4 lg:p-0 shadow-xl">
      <Link href={'/'}>
        <img
          src="/logo.png"
          alt="logo-image"
          className="w-16 h-16 rounded-full"
        />
      </Link>
      <span className="hidden lg:flex gap-20 items-center text-white font-bold">
        <Link href={'/'}>
          <p className="hover:text-[#cea17c] transition-colors duration-300">
            Sobre
          </p>
        </Link>
        <Link href={'/produtos'}>
          <p className="hover:text-[#cea17c] transition-colors duration-300">
            Produtos
          </p>
        </Link>
        <Link href={'/encomendas'}>
          <p className="hover:text-[#cea17c] transition-colors duration-300">
            Encomendas
          </p>
        </Link>
      </span>
      <HamburgerIcon />
    </nav>
  );
}
