import { supabase } from '@/supabase/supabaseComponent'

interface getProductsByIdProps {
  productId: number
}

export async function getProductsById({ productId }: getProductsByIdProps) {
  const { data, error } = await supabase.from('products').select().eq('id', productId)
  if (error) {
    throw new Error('Produto nao encontrados')
  }
  return data
}
