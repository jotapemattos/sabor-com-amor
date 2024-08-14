'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/inputComponent'
import { getProducts } from '@/utils/get-productsComponent'
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  const { data: initialProducts } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const [shownProducts, setShownProducts] = useState(initialProducts)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let products = initialProducts
    if (searchInput !== '' && products) {
      products = products.filter((product) => {
        if (!product.name) return
        const productName = product.name
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
        const inputText = searchInput
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
        return productName.includes(inputText)
      })
    }
    setShownProducts(products)
  }, [initialProducts, searchInput])

  return (
    <main className="flex flex-col justify-center items-center w-full max-w-screen-xl mx-auto mt-16 gap-12 mb-24 px-4 md:px-0">
      <h1 className="text-center font-serif text-brand-900 text-4xl">Produtos</h1>
      <Input
        className="h-8 w-80 md:w-96"
        placeholder="Pesquisar por produto..."
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <section className="w-full flex flex-wrap justify-center gap-20">
        {shownProducts?.map((product) =>
          product.status === 'disponível' ? (
            <div
              key={product.id}
              className="w-80 bg-zinc-50 border border-zinc-300 rounded-xl flex flex-col gap-2 justify-start p-1">
              <Image
                src={product.image as string}
                alt={`Retrato do produto: ${product.name}`}
                width={1000}
                height={500}
                className="object-cover h-52 w-full rounded-[8px]"
              />
              <div className="flex flex-col gap-2 w-full px-4">
                <h1 className="font-medium text-zinc-900 text-base">{product.name}</h1>
                <div className="w-full flex items-center justify-between">
                  <span className="text-zinc-800 text-base">{product.quantity}</span>
                  <span className="px-1 rounded-full text-xs border border-brand-900 bg-brand-100 text-brand-900">
                    R$ {product.price}
                  </span>
                </div>
                <span className="text-xs text-zinc-800 break-words">Descrição: {product.description}</span>
              </div>
              {/* <footer className="flex flex-col gap-2 w-full px-4 pb-3 mt-auto">
                <Button
                  asChild
                  className="group relative inline-flex h-10 px-6 items-center justify-center overflow-hidden rounded-md border border-brand-700 bg-gradient-to-b from-brand-500 via-brand-600 to-brand-700 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#93c5fd] hover:from-brand-700 hover:via-brand-700 hover:to-brand-700 active:[box-shadow:none]">
                  <Link
                    href="https://api.whatsapp.com/send?phone=5511975845050&?message=Ola vim pelo site"
                    target="_blank">
                    <span className="block group-active:[transform:translate3d(0,1px,0)]">Encomendar</span>
                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                      <MoveRight className="size-5" />
                    </div>
                  </Link>
                </Button>
              </footer> */}
            </div>
          ) : null
        )}
      </section>
    </main>
  )
}
