'use server'
import { createClient } from '@/supabase/serverComponent'

interface EditProductByIdRequest {
  productId: number
  name: string | null
  description: string | null
  price: string | null
  quantity: string | null
  image: string | null
  status: 'arquivado' | 'disponível' | null
}

export async function editProductById({
  productId,
  name,
  description,
  price,
  quantity,
  image,
  status
}: EditProductByIdRequest) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('products')
    .update({ name, description, price, image, quantity, status })
    .eq('id', productId)
    .select()

  if (error) {
    console.log(error)
    throw new Error('Não foi possível editar o produto. Tente novamente em breve')
  }
  return { data, error }
}
