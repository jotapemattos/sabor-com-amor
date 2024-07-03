'use client'
import type * as React from 'react'

import { getQueryClient } from '@/utils/get-query-clientComponent'
import { QueryClientProvider } from '@tanstack/react-query'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
