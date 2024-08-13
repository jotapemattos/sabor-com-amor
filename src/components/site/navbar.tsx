'use client'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="p-[1px] border border-zinc-400 rounded-full w-96">
      <nav className="text-sm bg-zinc-200/30 backdrop-blur-lg px-2 py-3 border border-zinc-100 flex w-full justify-around items-center rounded-full list-none">
        <Link href="/">Inicio</Link>
        <span className="size-1 rounded-full bg-brand-500" />
        <Link href="/produtos">Produtos</Link>
        <span className="size-1 rounded-full bg-brand-500" />
        <Link href="/">Contato</Link>
      </nav>
    </header>
  )
}
