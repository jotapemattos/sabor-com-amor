import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/serverComponent'

export default async function Admin() {
  const supabase = createClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')
  const handleLogout = () => {
    console.log('po')
  }
  return (
    <div>
      <button formAction={handleLogout}>Logout</button>
    </div>
  )
}
