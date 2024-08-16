import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/buttonComponent'
import { MoveRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full px-2 md:px-0 max-w-screen-md mx-auto gap-24 mt-20">
      <section className="flex flex-col items-center justify-center gap-14">
        <div className="text-center flex flex-col gap-3 relative">
          <Image
            src="/dandelion.png"
            alt=""
            width={500}
            height={1000}
            className="absolute left-0 w-40 h-64 -top-40 -rotate-6 -left-40"
          />
          <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl text-brand-900 font-bold">Sabor com Amor</h1>
          <span className="text-lg xl:text-xl text-brand-600">
            Comida preparada com amor conquista <br /> paladar & coração
          </span>
        </div>
        <Button
          asChild
          className="group relative inline-flex h-12 px-6 items-center justify-center overflow-hidden rounded-md border border-brand-700 bg-gradient-to-b from-brand-500 via-brand-600 to-brand-700 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#93c5fd] hover:from-brand-700 hover:via-brand-700 hover:to-brand-700 active:[box-shadow:none]">
          <Link href="/produtos">
            <span className="block group-active:[transform:translate3d(0,1px,0)]">Ver produtos</span>
            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
              <MoveRight className="size-5" />
            </div>
          </Link>
        </Button>
      </section>
      <section className="md:relative w-full md:h-80 h-fit flex flex-wrap justify-center items-center gap-1">
        <div className="md:absolute p-2 lg:p-3 border-[1px] border-zinc-300 w-44 h-64 lg:w-56 lg:h-72 bg-zinc-50 rounded-2xl md:-rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-200 ease-in-out z-10 md:-translate-x-52 lg:-translate-x-60 md:translate-y-0">
          <Image
            src="/sabor-com-amor-1.jpeg"
            width={500}
            height={1000}
            alt="foto da feira"
            className="aspect-[9/16] rounded-[8px] lg:rounded-sm object-cover h-full"
          />
        </div>
        <div className="md:absolute p-2 lg:p-3 border-[1px] border-zinc-300 w-44 h-64 lg:w-56 lg:h-72 bg-zinc-50 rounded-2xl md:rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-200 ease-in-out z-20 md:-translate-x-10 lg:-translate-x-14 md:translate-y-0">
          <Image
            src="/sabor-com-amor-2.jpeg"
            width={500}
            height={1000}
            alt="foto da feira"
            className="aspect-[9/16] rounded-[8px] lg:rounded-sm object-cover h-full"
          />
        </div>
        <div className="md:absolute p-2 lg:p-3 border-[1px] border-zinc-300 w-44 h-64 lg:w-56 lg:h-72 bg-zinc-50 rounded-2xl md:-rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-200 ease-in-out z-30 md:translate-x-24 lg:translate-x-28 md:translate-y-0">
          <Image
            src="/sabor-com-amor-3.jpeg"
            width={500}
            height={1000}
            alt="foto da feira"
            className="aspect-[9/16] rounded-[8px] lg:rounded-sm object-cover h-full"
          />
        </div>
        <div className="md:absolute p-2 lg:p-3 border-[1px] border-zinc-300 w-44 h-64 lg:w-56 lg:h-72 bg-zinc-50 rounded-2xl md:rotate-12 hover:rotate-0 hover:scale-105 transition-transform duration-200 ease-in-out z-40 md:translate-x-60 lg:translate-x-64 md:translate-y-0">
          <Image
            src="/sabor-com-amor-4.jpeg"
            width={500}
            height={1000}
            alt="foto da feira"
            className="aspect-[9/16] rounded-[8px] lg:rounded-sm object-cover h-full"
          />
        </div>
      </section>
    </main>
  )
}
