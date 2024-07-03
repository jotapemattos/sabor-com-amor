'use client'
import { CreateProductDialog } from '@/components/admin/create-product-dialogComponent'
import { DropdownFilter } from '@/components/admin/dropdown-filterComponent'
import { Badge } from '@/components/ui/badgeComponent'
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
import clsx from 'clsx'

export default function Products() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

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
          <Input className="self-start h-8 w-96" placeholder="Pesquisar por produto..." />
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
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>R$ {product.price}</TableCell>
                <TableCell>
                  <Badge
                    className={clsx(
                      '',
                      product.status === 'ativo' &&
                        'bg-green-200 border border-green-500 text-green-900 hover:bg-green-300 hover:text-green-950',
                      product.status === 'arquivado' &&
                        'bg-yellow-200 border border-yellow-500 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-950'
                    )}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <Ellipsis />
                    </PopoverTrigger>
                    <PopoverContent align="end" className="flex flex-col gap-2 max-w-fit p-2">
                      <Button size="sm" className="h-6 text-xs rounded-md p-2" variant="outline">
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        className="h-6 text-xs rounded-md p-2 border border-red-800 bg-red-300 text-red-800 hover:bg-red-400 hover:text-red-900"
                        variant="outline">
                        Deletar
                      </Button>
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
