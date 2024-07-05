import { supabase } from '@/supabase/supabaseComponent'

interface deleteProductByIdProps {
  productId: number
}

export async function deleteProductById({ productId }: deleteProductByIdProps) {
  const { error } = await supabase.from('products').delete().eq('id', productId)
  if (error) {
    console.log(error.message)
  }
}
