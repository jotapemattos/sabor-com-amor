/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Database } from './schema'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
