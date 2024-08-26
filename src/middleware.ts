import { NextRequest, NextResponse } from 'next/server'

import { createClient } from './supabase/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const supabase = createClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.rewrite(new URL('/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*'
}
