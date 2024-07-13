import Image from 'next/image'

import { Badge } from '../ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'

import { Product } from '@/supabase/entities-typesComponent'
import clsx from 'clsx'

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
        <span className="text-xs font-medium">Ingredientes: {product.description}</span>
      </CardContent>
      <CardFooter>
        <Badge
          className={clsx(
            '',
            product.status === 'disponível' &&
              'bg-green-200 border border-green-500 text-green-900 hover:bg-green-300 hover:text-green-950',
            product.status === 'arquivado' &&
              'bg-yellow-200 border border-yellow-500 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-950'
          )}>
          {product.status}
        </Badge>
      </CardFooter>
    </Card>
  )
}
