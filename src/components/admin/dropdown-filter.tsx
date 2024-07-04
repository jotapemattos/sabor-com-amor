'use client'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

import { Filter } from 'lucide-react'

export function DropdownFilter() {
  const router = useRouter()
  const params = useSearchParams()
  const status = params.get('status')

  const setFilter = (status: string) => {
    if (status) {
      router.push('?status=' + status)
    }
    if (!status) {
      router.push('/admin/products')
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1 text-sm">
            <Filter size={16} />
            <span>Filtrar</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={status === ''} onSelect={() => setFilter('')}>
            Todos
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={status === 'arquivado'} onSelect={() => setFilter('arquivado')}>
            Arquivados
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={status === 'ativo'} onSelect={() => setFilter('ativo')}>
            Ativos
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
