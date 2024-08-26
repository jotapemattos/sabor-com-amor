import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/buttonComponent'
import { MoveUpRight } from 'lucide-react'

export default function Order() {
  return (
    <main className="w-full max-w-screen-md mx-auto flex flex-col items-center justify-center mt-16 gap-16 px-6">
      <section className="w-full text-center space-y-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-900">
          Entre em contato e faça seu pedido!
        </h1>
        <p className="text-base text-zinc-700">
          Caso tenha criado interesse por algum de nossos produtos, não perca a oportunidade de fazer sua encomenda.
          Para isso basta enviar uma mensagem pelo WhatsApp informando o(s) produto(s) que deseja com a quantidade ao
          lado.
        </p>
        <Button
          asChild
          className="group relative inline-flex h-12 px-6 items-center justify-center overflow-hidden rounded-md border border-brand-700 bg-gradient-to-b from-brand-500 via-brand-600 to-brand-700 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#93c5fd] hover:from-brand-700 hover:via-brand-700 hover:to-brand-700 active:[box-shadow:none]">
          <Link href="https://api.whatsapp.com/send?phone=5511971673333" target="_blank">
            <span>Enviar mensagem</span>
            <div className="relative ml-1 h-5 w-5 overflow-hidden">
              <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                <MoveUpRight className="size-5" />
                <MoveUpRight className="size-5 -translate-x-4" />
              </div>
            </div>
          </Link>
        </Button>
      </section>
      <div className="relative p-3 -rotate-1 rounded-2xl border border-zinc-300 bg-zinc-50 shadow-md">
        <div className="size-12 bg-gradient-to-b from-brand-500 via-brand-600 to-brand-700 border border-brand-700 shadow-[inset_0_1px_0px_0px_#93c5fd] rounded-full absolute -top-3 -right-3" />
        <Image
          src="/encomendas.jpeg"
          alt="Retrato da barraca Sabor com Amor na feira Arte na Garagem"
          width={1000}
          height={500}
          className="rounded-[8px] aspect-video h-full object-cover"
        />
      </div>
    </main>
  )
}
