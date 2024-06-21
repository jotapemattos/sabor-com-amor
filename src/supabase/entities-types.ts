import { Database } from './schema'

export type Product = Database['public']['Tables']['products']['Row']
