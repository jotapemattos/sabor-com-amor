'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { createProduct } from '@/app/actions/create-productComponent'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumbComponent'
import { Button } from '@/components/ui/buttonComponent'
import { Input } from '@/components/ui/inputComponent'
import { AddNewProductSchema, addNewProductSchema } from '@/lib/zod-schemaComponent'
import { getProductsById } from '@/utils/get-product-by-idComponent'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Loader2, Check } from 'lucide-react'
import { toast } from 'sonner'

interface PageProps {
  params: { productId: string }
}

export default function Page({ params: { productId } }: PageProps) {
  const { data } = useQuery({
    queryKey: ['productById', productId],
    queryFn: () => getProductsById({ productId: Number(productId) })
  })
  const [isOpen, setIsOpen] = useState(false)
  const [productImage, setProductImage] = useState<File | null>(null)
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<AddNewProductSchema>({
    resolver: zodResolver(addNewProductSchema)
  })

  const name = watch('name')
  const description = watch('description')
  const price = watch('price')
  const quantity = watch('quantity')

  const { mutateAsync: createProductFn } = useMutation({
    mutationFn: createProduct,
    onSuccess() {
      queryClient.setQueryData(['products'], (data: AddNewProductSchema[]) => {
        return [...data, { name, description, price, quantity, productImage, status: 'ativo' }]
      })
    }
  })

  const handleProductCreation = async ({ name, description, price, quantity }: AddNewProductSchema) => {
    if (!errors.root) {
      try {
        const { error } = await createProductFn({ name, description, price, quantity, productImage })
        if (!error) toast.success('Produto criado com sucesso')
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message)
        }
      } finally {
        setIsOpen(false)
      }
    }
  }
  return (
    <main className="gap-16 flex flex-col pl-72 h-screen w-full items-start pr-12">
      <header className="flex justify-between items-center sticky w-full top-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/products">Produtos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data && data[0].name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <section className="p-4 rounded-md bg-zinc-50 border border-zinc-300 w-full">
        <h1 className="text-2xl font-extralight">Dados do produto</h1>
        <form onSubmit={handleSubmit(handleProductCreation)} className="space-y-4 w-full">
          <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
            <label htmlFor="name">Nome do produto</label>
            <Input placeholder="Escreva o nome do produto..." {...register('name')} />
            {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
          </span>
          <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
            <label htmlFor="description">Descrição do produto</label>
            <Input placeholder="Informe os ingredientes..." {...register('description')} />
            {errors.description ? <p className="text-sm text-red-600">{errors.description.message}</p> : null}
          </span>
          <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
            <label htmlFor="price">Preço do produto</label>
            <Input placeholder="20,00" {...register('price')} />
            {errors.price ? <p className="text-sm text-red-600">{errors.price.message}</p> : null}
          </span>
          <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
            <label htmlFor="quantity">Quantidade (200g, 1un, 2 discos, etc.)</label>
            <Input placeholder="1 unidade" {...register('quantity')} />
            {errors.quantity ? <p className="text-sm text-red-600">{errors.quantity.message}</p> : null}
          </span>
          <span className="flex w-full flex-col items-start gap-1 text-sm md:text-base">
            <label className="">Imagem do produto</label>
            <Input type="file" onChange={(e) => setProductImage(e.target.files ? e.target.files[0] : null)} />
          </span>
          <span className="flex w-full items-center justify-between">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-900 hover:bg-brand-950 items-center justify-center flex gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-white">Cadastrando produto</span>
                </>
              ) : (
                <>
                  <Check size={16} />
                  Salvar{' '}
                </>
              )}
            </Button>
          </span>
        </form>
      </section>
    </main>
  )
}
