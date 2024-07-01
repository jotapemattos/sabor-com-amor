import { getProducts } from '@/app/actions/get-productsComponent'
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
import { Button } from '@/components/ui/buttonComponent'
import { Ellipsis } from '@/components/ui/ellipsisComponent'
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
import { createClient } from '@/supabase/serverComponent'
import clsx from 'clsx'

export default async function Products() {
  const supabase = createClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  const products = await getProducts()

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
        <header className="w-full flex items-center justify-end gap-4">
          <CreateProductDialog user={user} />
          <DropdownFilter />
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
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">Pao de abobora vegano</TableCell>
                <TableCell>R$ {product.price}</TableCell>
                <TableCell className="flex items-center gap-2 ">
                  <span
                    className={clsx(
                      'absolute size-2 animate-ping rounded-full',
                      product.status === 'ativo' && 'bg-blue-700',
                      product.status === 'arquivado' && 'bg-yellow-600'
                    )}
                  />
                  <span
                    className={clsx(
                      'size-2 rounded-full',
                      product.status === 'ativo' && 'bg-blue-700',
                      product.status === 'arquivado' && 'bg-yellow-400'
                    )}
                  />
                  <p>{product.status}</p>
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
