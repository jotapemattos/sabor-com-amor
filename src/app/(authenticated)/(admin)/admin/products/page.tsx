'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { CreateProductDialog } from '@/components/admin/create-product-dialogComponent'
import { DeleteProductAlertDialog } from '@/components/admin/delete-product-alert-dialogComponent'
import { DropdownFilter } from '@/components/admin/dropdown-filterComponent'
import { ProductStatusBadge } from '@/components/admin/product-status-badgeComponent'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumbComponent'
import { Button } from '@/components/ui/buttonComponent'
import { Ellipsis } from '@/components/ui/ellipsisComponent'
import { Input } from '@/components/ui/inputComponent'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popoverComponent'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/tableComponent'
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

  return (
    <div className="gap-16 flex flex-col pl-72 h-screen w-full items-start pr-12">
      <header className="flex justify-between items-center sticky top-6 w-full">
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
        <header className="w-full flex items-center justify-between gap-4">
          <Input
            className="self-start h-8 w-96"
            placeholder="Pesquisar por produto..."
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <span className="flex items-center gap-4">
            <CreateProductDialog />
            <DropdownFilter />
          </span>
        </header>
        <Table>
          <TableCaption>Lista de todos os produtos cadastrados</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-max">Nome</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shownProducts?.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>R$ {product.price}</TableCell>
                <TableCell>
                  <ProductStatusBadge productStatus={product.status} />
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <Ellipsis />
                    </PopoverTrigger>
                    <PopoverContent align="end" className="flex flex-col gap-2 max-w-fit p-2">
                      <Button asChild size="sm" className="h-6 text-xs rounded-md p-2" variant="outline">
                        <Link href={`/admin/products/${product.id}`}>Editar</Link>
                      </Button>
                      <DeleteProductAlertDialog productId={product.id} />
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}
