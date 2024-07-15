'use client'

import { useState } from 'react'
import { Button as AriaButton } from 'react-aria-components'
import { useForm } from 'react-hook-form'

import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { FileTrigger } from '../ui/file-trigger'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

import { AddNewProductSchema, addNewProductSchema } from '@/lib/zod-schemaComponent'
import { createProduct } from '@/utils/create-productComponent'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PlusIcon, Upload } from 'lucide-react'
import { Check, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export function CreateProductDialog() {
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
        return [...data, { name, description, price, quantity, productImage, status: 'disponível' }]
      })
      queryClient.invalidateQueries({ queryKey: ['products'] })
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
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="text-sm rounded-md px-4 py-2 flex text-white font-medium items-center justify-center gap-2 bg-brand-900 h-8 hover:bg-brand-950 hover:text-white">
          <PlusIcon size={16} />
          Novo produto
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar produto</DialogTitle>
            <DialogDescription>
              Insira os dados do produto e clique em &quot;salvar&quot; para criá-lo.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(handleProductCreation)} className="space-y-4">
            <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
              <label htmlFor="name">Nome do produto</label>
              <Input
                placeholder="Escreva o nome do produto..."
                {...register('name')}
                className="bg-zinc-100/20 focus-visible:ring-1 focus-visible:ring-brand-400 shadow-sm border-b-zinc-300"
              />
              {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
            </span>
            <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
              <label htmlFor="description">Descrição do produto</label>
              <Textarea
                className="resize-none bg-zinc-100/20 focus-visible:ring-1 focus-visible:ring-brand-400 shadow-sm border-b-zinc-300"
                placeholder="Informe os ingredientes..."
                {...register('description')}
              />
              {errors.description ? <p className="text-sm text-red-600">{errors.description.message}</p> : null}
            </span>
            <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
              <label htmlFor="price">Preço do produto</label>
              <Input
                className="bg-zinc-100/20 focus-visible:ring-1 focus-visible:ring-brand-400 shadow-sm border-b-zinc-300"
                placeholder="20,00"
                {...register('price')}
              />
              {errors.price ? <p className="text-sm text-red-600">{errors.price.message}</p> : null}
            </span>
            <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
              <label htmlFor="quantity">Quantidade (200g, 1un, 2 discos, etc.)</label>
              <Input
                className="bg-zinc-100/20 focus-visible:ring-1 focus-visible:ring-brand-400 shadow-sm border-b-zinc-300"
                placeholder="1 unidade"
                {...register('quantity')}
              />
              {errors.quantity ? <p className="text-sm text-red-600">{errors.quantity.message}</p> : null}
            </span>
            <span className="flex w-full flex-col items-start gap-1 text-sm md:text-base">
              <label className="">Imagem do produto</label>
              <FileTrigger
                onSelect={(e) => {
                  if (e) {
                    const files = Array.from(e)
                    setProductImage(files[0])
                  }
                }}
                allowsMultiple>
                <AriaButton
                  className="bg-zinc-900 text-zinc-200 rounded-md p-2 text-sm flex items-center gap-2 h-8 hover:bg-zinc-950 transition-colors duration-200"
                  type="button">
                  <Upload size={16} /> Selecionar imagem
                </AriaButton>
              </FileTrigger>
            </span>
            <span className="flex w-full gap-4 items-center justify-between">
              <Button
                className="w-full h-8 bg-zinc-200 text-brand-950 border-zinc-500 border hover:bg-zinc-300"
                onClick={() => setIsOpen(false)}
                type="button">
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-8 bg-brand-900 hover:bg-brand-950 items-center justify-center flex gap-2">
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
        </DialogContent>
      </Dialog>
    </>
  )
}
