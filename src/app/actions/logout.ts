'use server'
import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/serverComponent'

export const signOut = async () => {
  const supabase = createClient()
  await supabase.auth.signOut()
  return redirect('/sign-in')
}
