import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/buttonComponent'
import { MoveRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full max-w-screen-xl mx-auto gap-32">
      <section className="flex flex-col items-center justify-center gap-14">
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-serif text-8xl text-brand-900 font-bold">Sabor com Amor</h1>
          <span className="text-xl text-brand-600">
            Comida preparada com amor conquista <br /> paladar & coração
          </span>
        </div>
        <Button
          asChild
          className="border-b-4 rounded-lg border-b-brand-800 group bg-brand-700 px-4 py-5 text-zinc-100 w-40 text-sm hover:bg-brand-800 transition-all duration-300">
          <Link href="/produtos" className="flex items-center justify-center relative overflow-hidden">
            <span className="transition-all duration-300 group-hover:translate-x-[-12px]">Ver produtos</span>
            <MoveRight className="absolute right-[12px] size-5 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300 ease-in-out" />
          </Link>
        </Button>
      </section>
      <section className="relative w-full h-80 flex justify-center items-center">
        <div className="absolute p-3 border-[1px] border-zinc-300 w-56 h-72 bg-zinc-50 rounded-2xl -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-200 ease-in-out z-10 -translate-x-60">
          <Image
            src="/sabor-com-amor.jpeg"
            width={500}
            height={1000}
            alt="foto da feira"
            className="aspect-[9/16] rounded-sm object-cover h-full"
          />
        </div>
        <div className="absolute p-3 border-[1px] border-zinc-300 w-56 h-72 bg-zinc-50 rounded-2xl rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-200 ease-in-out z-20 -translate-x-14">
          <Image
            src="/sabor-com-amor.jpeg"
            width={500}
            height={1000}
            alt="foto da feira"
            className="aspect-[9/16] rounded-sm object-cover h-full"
          />
        </div>
        <div className="absolute p-3 border-[1px] border-zinc-300 w-56 h-72 bg-zinc-50 rounded-2xl -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-200 ease-in-out z-30 translate-x-28">
          <Image
            src="/sabor-com-amor.jpeg"
            width={500}
            height={1000}
            alt="foto da feira"
            className="aspect-[9/16] rounded-sm object-cover h-full"
          />
        </div>
        <div className="absolute p-3 border-[1px] border-zinc-300 w-56 h-72 bg-zinc-50 rounded-2xl rotate-12 hover:rotate-0 hover:scale-105 transition-transform duration-200 ease-in-out z-40 translate-x-64">
          <Image
            src="/sabor-com-amor.jpeg"
            width={500}
            height={1000}
            alt="foto da feira"
            className="aspect-[9/16] rounded-sm object-cover h-full"
          />
        </div>
      </section>
    </main>
  )
}
