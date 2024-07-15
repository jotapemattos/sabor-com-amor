import { Badge } from '../ui/badge'

import clsx from 'clsx'

export function ProductStatusBadge({ productStatus }: { productStatus: string | null }) {
  return (
    <>
      <Badge
        className={clsx(
          '',
          productStatus === 'disponível' &&
            'bg-green-200 border border-green-500 text-green-900 hover:bg-green-300 hover:text-green-950',
          productStatus === 'arquivado' &&
            'bg-yellow-200 border border-yellow-500 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-950'
        )}>
        {productStatus}
      </Badge>
    </>
  )
}
