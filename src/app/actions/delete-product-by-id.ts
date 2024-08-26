'use server'

import { createClient } from '@/supabase/serverComponent'

interface deleteProductByIdProps {
  productId: number
}

export async function deleteProductById({ productId }: deleteProductByIdProps) {
  const supabase = createClient()
  const { error } = await supabase.from('products').delete().eq('id', productId)
  if (error) {
    console.log(error.message)
    throw new Error('Não foi possível deletar o produto. Tente novamente em breve.')
  }
}
