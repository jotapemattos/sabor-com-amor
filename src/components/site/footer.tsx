import Link from 'next/link'

import InstagramLogo from './instagram-logo'

import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full mx-auto max-w-screen-md my-10 flex items-center justify-center justify-between px-4">
      <div className="flex items-center gap-2 text-zinc-500 text-sm">
        <span>&copy; 2024 Sabor com Amor</span>
        <hr className="w-[1px] h-4 bg-zinc-600" />
        <Link href="https://www.instagram.com/susi_a_biasetto/" target="_blank">
          <InstagramLogo />
        </Link>
      </div>
      <div className="text-sm text-zinc-500 flex items-center justify-center gap-2">
        <span>Feito com</span>
        <Heart className="size-4" />
      </div>
    </footer>
  )
}
