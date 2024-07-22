'use server'
import { createClient } from '@/supabase/serverComponent'

interface CreateProductProps {
  name: string
  description: string
  price: string
  quantity: string
  image: string | undefined
}

export async function createProduct({ name, description, price, quantity, image }: CreateProductProps) {
  const supabase = createClient()

  const { data, error, status } = await supabase
    .from('products')
    .insert([{ name, price, description, quantity, image, status: 'disponível' }])
    .select()

  if (error) {
    console.log(error)
    throw new Error('Não foi possível cadastrar o produto. Tente novamente em breve.')
  }
  return { data, status, error }
}
