import { getProducts } from '@/app/actions/get-productsComponent'
import { CommandMenu } from '@/components/admin/command-dialogComponent'
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
import { createClient } from '@/supabase/serverComponent'

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
        <span>
          <CommandMenu products={products} />
        </span>
      </header>
      <section className="w-full flex flex-col gap-2 items-center justify-center">
        <header className="w-full flex items-center justify-end gap-4">
          <CreateProductDialog user={user} />
          <DropdownFilter />
        </header>
      </section>
    </div>
  )
}
