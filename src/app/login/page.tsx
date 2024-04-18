'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { login } from './actions/login';

import { Button } from '@/components/ui/buttonComponent';
import { InputFocusBlur } from '@/components/ui/input-focus-blurComponent';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email({
    message: 'Email inválido'
  }),
  password: z.string().min(8, 'A senha possui no mínimo 8 caracteres')
});

type SignInSchema = z.infer<typeof signInSchema>;

export default function Login() {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  });

  const [isPending, startTransition] = useTransition();

  /*   const handleSignIn = ({ email, password }: SignInSchema) => {
    if (!errors.root) {
      startTransition(async () => {
        try {
          await login({ email, password });
        } catch (error) {
          if (error instanceof Error) {
            //toast.error(error.message);
            console.log(error.message);
          }
        }
      });
    }
  }; */

  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-evenly">
      <header className="flex flex-col items-center justify-center gap-8">
        <h3 className="font-serif text-3xl">Sabor com Amor</h3>
        <h1 className="font-medium text-4xl font-sans">
          Bem vindo(a) de volta
        </h1>
      </header>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="bg-zinc-50 flex flex-col items-start justify-between min-w-96 p-8 rounded-md gap-8 border-zinc-200 border"
      >
        <span className="flex w-full flex-col items-start gap-2">
          <label htmlFor="email">Email</label>
          <InputFocusBlur
            placeholder="seuemail@exemplo.com"
            type="email"
            required
            {...register('email')}
          />
        </span>
        <span className="flex w-full flex-col items-start gap-2">
          <label htmlFor="password">Senha</label>
          <div className="relative mb-6 flex items-center w-full">
            <InputFocusBlur
              required
              placeholder="•••••••"
              type={shouldShowPassword ? 'text' : 'password'}
              {...register('password')}
            />
            <button
              className="absolute right-2 rounded-md border bg-neutral-200 border-zinc-300 p-1 z-[999999]"
              type="button"
              onClick={() => setShouldShowPassword((prev) => !prev)}
            >
              <EyeOff
                size={20}
                className={`absolute transition-all ${shouldShowPassword ? 'transition-y-1 scale-100' : 'scale-0'}`}
              />
              <Eye
                size={20}
                className={`transition-all ${shouldShowPassword ? 'transition-y-1 scale-0' : 'scale-100'}`}
              />
            </button>
          </div>
        </span>
        <Button
          variant="default"
          size="sm"
          className="group flex items-center justify-center gap-2 w-full"
          type="submit"
          disabled={isPending}
        >
          Entrar
          <LogIn
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Button>
      </form>
      <span className="flex items-center justify-center text-zinc-800 gap-1">
        Ainda nao tem uma conta?
        <Link href="/sign-up" className="text-zinc-950 underline">
          Criar conta
        </Link>
      </span>
    </main>
  );
}
