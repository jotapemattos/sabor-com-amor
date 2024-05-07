import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email inválido'
  }),
  password: z.string().min(8, 'A senha possui no mínimo 8 caracteres')
})

export type LoginSchema = z.infer<typeof loginSchema>
