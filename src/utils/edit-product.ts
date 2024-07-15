import { supabase } from '@/supabase/supabaseComponent'

interface EditProductByIdRequest {
  productId: number
  name: string | null
  description: string | null
  price: string | null
  quantity: string | null
  status: 'arquivado' | 'disponível' | null
}

export async function editProductById({
  productId,
  name,
  description,
  price,
  quantity,
  status
}: EditProductByIdRequest) {
  const { data, error } = await supabase
    .from('products')
    .update({ name, description, price, quantity, status })
    .eq('id', productId)
    .select()

  if (error) {
    throw new Error(error.message)
  }
  return { data, error }
}
