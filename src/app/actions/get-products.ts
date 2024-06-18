import { supabase } from '@/utils/supabase/supabaseComponent'

export async function getProducts() {
  const { data, error } = await supabase.from('products').select()
  if (error) {
    throw new Error('Produtos nao encontrados')
  }
  return data
}
