'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import { Input } from '@/components/ui/inputComponent'
import { getProducts } from '@/utils/get-productsComponent'
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  const { data: initialProducts } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const filteredProducts = useMemo(() => {
    if (initialProducts) {
      return initialProducts.sort((a, b) => {
        const aStartsWithPao = a.name?.normalize('NFD').toLowerCase().startsWith('p')
        const bStartsWithPao = b.name?.normalize('NFD').toLowerCase().startsWith('p')

        if (aStartsWithPao && !bStartsWithPao) {
          return -1
        } else if (!aStartsWithPao && bStartsWithPao) {
          return 1
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return a.name!.localeCompare(b.name!)
      })
    }
  }, [initialProducts])

  const [shownProducts, setShownProducts] = useState(filteredProducts)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let products = filteredProducts
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
  }, [filteredProducts, searchInput])

  return (
    <main className="flex flex-col justify-center items-center w-full max-w-screen-xl mx-auto mt-16 gap-12 mb-24 px-4 md:px-0">
      <h1 className="text-center font-serif text-brand-900 text-4xl">Produtos</h1>
      <div className="w-full px-4 flex items-center justify-center">
        <Input
          className="h-8 w-80 md:w-96"
          placeholder="Pesquisar por produto..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <section className="w-auto flex flex-wrap justify-center gap-20">
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
            </div>
          ) : null
        )}
      </section>
    </main>
  )
}
