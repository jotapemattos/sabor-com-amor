import { supabase } from '@/supabase/supabaseComponent'

interface CreateProductProps {
  name: string
  description: string
  price: string
  quantity: string
  productImage: File | null
}

export async function createProduct({ name, description, price, quantity, productImage }: CreateProductProps) {
  if (!productImage) {
    throw new Error('A imagem é necessária para criação do produto')
  }

  const fileExtension = productImage.name.split('.').pop()
  const filePath = `${Math.random()}.${fileExtension}`

  const imageUpload = await supabase.storage.from('products').upload(filePath, productImage, {
    cacheControl: '3600',
    upsert: false
  })

  const image = imageUpload.data?.path

  if (imageUpload.error) {
    console.log(imageUpload.error)
    throw new Error('Não foi possível cadastrar o produto')
  }
  const { data, error, status } = await supabase
    .from('products')
    .insert([{ name, price, description, quantity, image, status: 'disponível' }])
    .select()

  if (error) {
    throw new Error('Não foi possível cadastrar o produto')
  }
  return { data, status, error: imageUpload.error }
}
