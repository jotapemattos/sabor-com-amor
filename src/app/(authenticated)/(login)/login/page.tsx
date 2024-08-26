import { redirect } from 'next/navigation'

import { Form } from '@/components/login/formComponent'
import { createClient } from '@/supabase/serverComponent'

export const metadata = {
  title: 'Login'
}

export default async function Login() {
  const supabase = createClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (user) redirect('/admin/products')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-24">
      <header className="flex flex-col items-center justify-center gap-8 fixed mt-8 top-0">
        <h3 className="font-serif text-4xl md:text-5xl">Sabor com Amor</h3>
      </header>
      <Form />
    </main>
  )
}
