import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/serverComponent'

export default async function Admin() {
  const supabase = createClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  return <div>Admin</div>
}
