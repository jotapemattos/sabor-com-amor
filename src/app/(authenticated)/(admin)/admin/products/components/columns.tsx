'use client'

import Link from 'next/link'

import { DeleteProductAlertDialog } from '@/components/admin/delete-product-alert-dialogComponent'
import { ProductStatusBadge } from '@/components/admin/product-status-badgeComponent'
import { Button } from '@/components/ui/buttonComponent'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popoverComponent'
import { Product } from '@/supabase/entities-typesComponent'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className="p-0">
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const { name } = row.original
      return <span className="line-clamp-1">{name}</span>
    }
  },
  {
    accessorKey: 'price',
    header: 'Preço',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(amount)

      return <div className="font-normal">{formatted}</div>
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return <ProductStatusBadge productStatus={row.getValue('status')} />
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const product = row.original

      return (
        <Popover>
          <PopoverTrigger>
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </PopoverTrigger>
          <PopoverContent align="end" className="flex flex-col gap-2 max-w-fit p-2">
            <Button asChild size="sm" className="h-6 text-xs rounded-md p-2" variant="outline">
              <Link href={`/admin/products/${product.id}`}>Editar</Link>
            </Button>
            <DeleteProductAlertDialog productId={product.id} />
          </PopoverContent>
        </Popover>
      )
    }
  }
]
