'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { columns } from './components/columns'
import { DataTable } from './components/data-table'

import { CreateProductDialog } from '@/components/admin/create-product-dialogComponent'
import { DropdownFilter } from '@/components/admin/dropdown-filterComponent'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumbComponent'
import { Input } from '@/components/ui/inputComponent'
import { getProducts } from '@/utils/get-productsComponent'
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  const params = useSearchParams()
  const productStatus = params.get('status')

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const filteredProducts = useMemo(() => {
    if (productStatus && products) {
      return products.filter((product) => product.status === productStatus)
    }
    return products
  }, [products, productStatus])

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

  if (shownProducts === undefined) {
    return
  }

  return (
    <div className="gap-16 flex flex-col p-4 lg:pl-72 h-screen w-full items-start lg:pr-12">
      <header className="flex justify-between items-center top-6 w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Produtos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <section className="w-full flex flex-col gap-10 items-center justify-center">
        <header className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Input
            className="self-start h-8 w-full md:w-96"
            placeholder="Pesquisar por produto..."
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <span className="flex items-center gap-4">
            <CreateProductDialog />
            <DropdownFilter />
          </span>
        </header>
        <DataTable columns={columns} data={shownProducts} />
      </section>
    </div>
  )
}
