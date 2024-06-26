'use client'
import { useState } from 'react'

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
  const [ascending, setAscending] = useState(false)
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
          <DropdownMenuCheckboxItem checked={ascending} onSelect={() => setAscending(true)}>
            Arquivado
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={!ascending} onSelect={() => setAscending(false)}>
            Ativados
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
