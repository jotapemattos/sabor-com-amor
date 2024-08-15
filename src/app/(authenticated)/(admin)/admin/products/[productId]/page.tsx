'use client'

import { useEffect, useState } from 'react'
import { Button as AriaButton } from 'react-aria-components'
import { useForm } from 'react-hook-form'

import { editProductById } from '@/app/actions/edit-productComponent'
import { AdminProductCard } from '@/components/admin/admin-product-cardComponent'
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
import { FileTrigger } from '@/components/ui/file-triggerComponent'
import { Input } from '@/components/ui/inputComponent'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-groupComponent'
import { Separator } from '@/components/ui/separatorComponent'
import { Textarea } from '@/components/ui/textareaComponent'
import { EditProductSchema, editProductSchema } from '@/lib/zod-schemaComponent'
import { createClient } from '@/supabase/clientComponent'
import { Product } from '@/supabase/entities-typesComponent'
import { getProductsById } from '@/utils/get-product-by-idComponent'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Loader2, Check, PenTool, Upload, Eye } from 'lucide-react'
import { toast } from 'sonner'

interface PageProps {
  params: { productId: string }
}

type ProductStatus = 'disponível' | 'arquivado'

export const metadata = {
  title: 'Edição de Produtos'
}

export default function Page({ params: { productId } }: PageProps) {
  const { data: product } = useQuery({
    queryKey: ['productById', productId],
    queryFn: () => getProductsById({ productId: Number(productId) })
  })
  const [productStatus, setProductStatus] = useState<ProductStatus | null>(null)
  const [productImageFile, setProductImageFile] = useState<File | null>(null)
  const [productImageUrl, setProductImageUrl] = useState<string | null>(null)
  const supabase = createClient()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (product) {
      setProductStatus(product.status)
      setProductImageUrl(product.image)
    }
  }, [product])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<EditProductSchema>({
    resolver: zodResolver(editProductSchema)
  })

  const name = watch('name')
  const description = watch('description')
  const price = watch('price')
  const quantity = watch('quantity')

  const { mutateAsync: editProductByIdFn } = useMutation({
    mutationFn: editProductById,
    onSuccess() {
      queryClient.setQueryData(['productById', productId], (data: Product) => {
        return { ...data, name, description, price, quantity, image: productImageUrl, status: productStatus }
      })
    }
  })

  const handleProductUpdate = async ({ name, description, price, quantity }: EditProductSchema) => {
    if (!errors.root) {
      try {
        await uploadProductImage()
        await editProductByIdFn({
          productId: Number(productId),
          name,
          description,
          price,
          quantity,
          image: productImageUrl,
          status: productStatus
        })
        toast.success('Produto editado com sucesso')
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message)
        }
      }
    }
  }

  // TODO - solves the problem with upsert images
  const uploadProductImage = async () => {
    if (!productImageFile) return

    const fileExtension = productImageFile.name.split('.').pop()
    const filePath = `${Math.random()}-image.${fileExtension}`

    const { data, error: uploadError } = await supabase.storage.from('products').upload(filePath, productImageFile)

    if (uploadError) {
      console.log(uploadError)
      throw new Error('Não foi possível editar o produto')
    }

    const {
      data: { publicUrl }
    } = supabase.storage.from('products').getPublicUrl(data.path)
    const image = publicUrl

    setProductImageUrl(image)
  }

  return (
    <main className="gap-16 flex flex-col lg:pl-64 xl:pl-72 h-screen w-full items-start lg:pr-12 px-4">
      <header className="flex justify-between items-center w-full mt-6">
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
              <BreadcrumbPage>{product && product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <section className="w-full flex flex-col md:flex-row items-start gap-4">
        {product ? (
          <>
            <div className="w-full flex flex-col items-center justify-center gap-6">
              <h1 className="text-2xl flex items-center text-start xl:w-96 gap-2">
                <Eye size={24} /> Visualização
              </h1>
              <AdminProductCard product={product} />
            </div>
            <Separator className="w-full h-[1px] md:h-full md:w-[1px] bg-zinc-200" />
            <div className="w-full flex flex-col items-center justify-center gap-6">
              <h1 className="text-2xl flex items-center gap-2 xl:w-96 text-start">
                <PenTool size={24} /> Editar Produto
              </h1>
              <form onSubmit={handleSubmit(handleProductUpdate)} className="xl:w-96 space-y-6 mb-12">
                <div className="flex w-full items-center gap-2">
                  <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
                    <label htmlFor="name">Nome do produto</label>
                    <Input
                      className="bg-zinc-100/20 focus-visible:ring-1 focus-visible:ring-brand-400 shadow-sm border-b-zinc-300"
                      defaultValue={product.name ?? ''}
                      placeholder="Escreva o nome do produto..."
                      {...register('name')}
                    />
                  </span>
                  <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
                    <label htmlFor="price">Preço do produto</label>
                    <Input
                      className="bg-zinc-100/20 focus-visible:ring-1 focus-visible:ring-brand-400 shadow-sm border-b-zinc-300"
                      defaultValue={product.price ?? ''}
                      placeholder="20,00"
                      {...register('price')}
                    />
                  </span>
                </div>
                <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
                  <label htmlFor="description">Descrição do produto</label>
                  <Textarea
                    className="resize-none bg-zinc-100/20 focus-visible:ring-1 focus-visible:ring-brand-400 shadow-sm border-b-zinc-300"
                    defaultValue={product.description ?? ''}
                    placeholder="Informações adicionais..."
                    {...register('description')}
                  />
                </span>
                <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
                  <label htmlFor="quantity">Quantidade (200g, 1un, 2 discos, etc.)</label>
                  <Input
                    className="bg-zinc-100/20 focus-visible:ring-1 focus-visible:ring-brand-400 shadow-sm border-b-zinc-300"
                    defaultValue={product.quantity ?? ''}
                    placeholder="1 unidade"
                    {...register('quantity')}
                  />
                </span>
                <span className="flex w-full flex-col items-start gap-1 text-sm md:text-base">
                  <label className="">Imagem do produto</label>
                  <FileTrigger
                    onSelect={(e) => {
                      if (e) {
                        const files = Array.from(e)
                        setProductImageFile(files[0])
                      }
                    }}
                    allowsMultiple>
                    <AriaButton
                      className="bg-zinc-100/20 text-zinc-900 border border-zinc-300 shadow-md rounded-md p-2 text-sm flex items-center gap-2 h-8 hover:bg-zinc-100 transition-colors duration-200"
                      type="button">
                      <Upload size={16} /> Selecionar imagem
                    </AriaButton>
                  </FileTrigger>
                </span>
                <span className="flex w-full flex-col items-start gap-1 text-sm md:text-base">
                  <label>Status</label>
                  <RadioGroup
                    defaultValue={product.status ?? ''}
                    onValueChange={(value) => setProductStatus(value as ProductStatus)}
                    className="flex items-center gap-4 w-full">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="arquivado" />
                      <ProductStatusBadge productStatus="arquivado" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="disponível" />
                      <ProductStatusBadge productStatus="disponível" />
                    </div>
                  </RadioGroup>
                </span>
                <span className="flex w-full items-center justify-between">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-900 hover:bg-brand-950 rounded-md items-center justify-center flex gap-2 w-full">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-white">Editando produto</span>
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
            </div>
          </>
        ) : null}
      </section>
    </main>
  )
}
