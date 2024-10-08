import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().trim().email({
    message: 'Email inválido'
  }),
  password: z.string().trim().min(8, 'A senha possui no mínimo 8 caracteres')
})

export type LoginSchema = z.infer<typeof loginSchema>

export const addNewProductSchema = z.object({
  name: z.string().min(3, { message: 'Este campo é obrigatório.' }),
  price: z.string().min(3, { message: 'Este campo é obrigatório.' }),
  description: z.string().min(3, { message: 'Este campo é obrigatório.' }),
  quantity: z.string().min(3, { message: 'Este campo é obrigatório.' })
})

export type AddNewProductSchema = z.infer<typeof addNewProductSchema>

export const editProductSchema = z.object({
  name: z.string().nullable().or(z.literal('')),
  price: z.string().nullable().or(z.literal('')),
  description: z.string().nullable().or(z.literal('')),
  quantity: z.string().nullable().or(z.literal(''))
})

export type EditProductSchema = z.infer<typeof editProductSchema>
