'use client';

import { InputFocusBlur } from '@/components/ui/input-focus-blurComponent';
import {z} from 'zod'

const emailSchema = z
  .object({
    email: z.string().email({
      message: 'Email inválido',
    }),
    password: z
      .string().min(8, 'A senha possui no mínimo 8 caracteres')
      
  })

type EmailSchema = z.infer<typeof emailSchema>

export default function Login() {
  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-around">
      <header className="flex flex-col items-center justify-center gap-8">
        <h3 className="font-serif text-3xl">Sabor com Amor</h3>
        <h1 className="font-medium text-4xl font-sans">
          Bem vindo(a) de volta
        </h1>
      </header>
      <form className="bg-zinc-50 flex flex-col items-start justify-between min-w-96 p-8 rounded-md gap-4 border-zinc-200 border">
        <span className="flex w-full flex-col items-start gap-2">
          <label>Email</label>
          <InputFocusBlur
            placeholder="seuemail@exemplo.com"
            type="email"
          />
        </span>
        <span className="flex w-full flex-col items-start gap-2">
          <label>Senha</label>
          <InputFocusBlur
            placeholder="*******"
            type="password"
          />
        </span>
      </form>
      <span>Ainda nao tem uma conta? Criar conta</span>
    </main>
  );
}
