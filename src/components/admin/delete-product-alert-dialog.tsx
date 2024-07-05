'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../ui/alert-dialog'
import { Button } from '../ui/button'

import { deleteProductById } from '@/utils/delete-product-by-idComponent'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

interface DeleteProductAlertDialogProps {
  productId: number
}

export function DeleteProductAlertDialog({ productId }: DeleteProductAlertDialogProps) {
  const queryClient = useQueryClient()

  const { mutateAsync: deleteProductByIdFn, isPending } = useMutation({
    mutationFn: deleteProductById,
    onSuccess: () => {
      toast.success('Produto removido com sucesso.')
    },
    onError: (error) => {
      console.log(error)
      toast.error('Não foi possível deletar o produto. Tente novamente em breve')
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  const handleDelete = async () => {
    await deleteProductByIdFn({ productId })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="sm"
          className="h-6 text-xs rounded-md p-2 border border-red-800 bg-red-300 text-red-800 hover:bg-red-400 hover:text-red-900"
          variant="outline">
          Deletar
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente seu produto.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              className="bg-red-500/10 text-red-500 hover:bg-red-500/20"
              onClick={handleDelete}
              disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Excluindo...</span>
                </>
              ) : (
                <span>Excluir</span>
              )}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
