import Image from 'next/image'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { ProductStatusBadge } from './product-status-badge'

import { Product } from '@/supabase/entities-typesComponent'

interface AdminProductCardProps {
  product: Product
}

export function AdminProductCard({ product }: AdminProductCardProps) {
  return (
    <Card className="w-96 rounded-md border border-zinc-300 shadow-md bg-zinc-100/20">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Image src={product.image ?? ''} alt="product image" width={500} height={500} />
        <div className="flex w-full justify-between items-center">
          <p className="text-base font-light">{product.quantity}</p>
          <p className="font-bold text-sm">R$ {product.price}</p>
        </div>
        <span className="text-xs font-medium hyphens-auto break-words">Ingredientes: {product.description}</span>
      </CardContent>
      <CardFooter>
        <ProductStatusBadge productStatus={product.status} />
      </CardFooter>
    </Card>
  )
}
