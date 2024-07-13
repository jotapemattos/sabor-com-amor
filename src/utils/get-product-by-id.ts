import { supabase } from '@/supabase/supabaseComponent'

interface getProductsByIdProps {
  productId: number
}

export async function getProductsById({ productId }: getProductsByIdProps) {
  const { data, error } = await supabase.from('products').select().eq('id', productId).limit(1).single()
  if (error || !data) {
    throw new Error('Produto nao encontrados')
  }
  return data
}
