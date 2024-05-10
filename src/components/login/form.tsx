'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { login } from '@/app/actions/loginComponent'
import { Button } from '@/components/ui/buttonComponent'
import { InputFocusBlur } from '@/components/ui/input-focus-blurComponent'
import { LoginSchema, loginSchema } from '@/lib/schemaComponent'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2, LogIn } from 'lucide-react'
import { toast } from 'sonner'
export function Form() {
  const [shouldShowPassword, setShouldShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const handleLogin = async ({ email, password }: LoginSchema) => {
    if (!errors.root) {
      try {
        await login({ email, password })
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message)
        }
      }
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-zinc-50 flex flex-col items-start justify-between w-72 md:w-80 lg:w-96 p-8 rounded-lg gap-8 border-zinc-200 border">
        <span className="space-y-1">
          <h1 className="font-medium text-xl md:text-2xl font-sans">Bem vinda de volta</h1>
          <p className="text-neutral-500 text-sm md:text-md">Faça login para gerenciar sua loja.</p>
        </span>
        <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
          <label htmlFor="email">Email</label>
          <InputFocusBlur placeholder="seuemail@exemplo.com" {...register('email')} />
          {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
        </span>
        <span className="flex w-full flex-col items-start gap-2 text-sm md:text-base">
          <label htmlFor="password">Senha</label>
          <div className="relative flex items-center w-full">
            <InputFocusBlur
              placeholder="•••••••"
              type={shouldShowPassword ? 'text' : 'password'}
              {...register('password')}
            />
            <button
              className="absolute right-2 rounded-md border bg-neutral-200 border-zinc-300 p-1 z-[999999]"
              type="button"
              onClick={() => setShouldShowPassword((prev) => !prev)}>
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
          {errors.password ? <p className="text-sm text-red-600">{errors.password.message}</p> : null}
        </span>
        <Button
          variant="default"
          size="sm"
          className="text-sm md:text-md px-4 py-2 rounded-lg shadow w-full group bg-zinc-800 space-x-2"
          type="submit"
          disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Entrando...</span>
            </>
          ) : (
            <>
              <p>Entrar</p>
              <LogIn size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </>
          )}
        </Button>
      </form>
    </>
  )
}
