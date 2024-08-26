'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/serverComponent'

interface LoginProps {
  email: string
  password: string
}

export async function login({ email, password }: LoginProps) {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error?.message.includes('Invalid login credentials')) {
    throw new Error('E-mail ou senha incorretos. Por favor, tente novamente.')
  }

  if (error) {
    throw new Error('Ops! Ocorreu um erro. Por favor, tente novamente mais tarde.')
  }
  return redirect('/admin/products')
}
