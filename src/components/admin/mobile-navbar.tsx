'use client'
import Link from 'next/link'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { items } from './admin-sidebar'

import { signOut } from '@/app/actions/logoutComponent'
import { cn } from '@/lib/utilsComponent'
import { motion } from 'framer-motion'
import { LogOut, Loader2, Menu } from 'lucide-react'
import { toast } from 'sonner'

export function MobileNavBar() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [activeIdx, setActiveIdx] = useState<number>(0)
  const [isPending, setIsPending] = useState(false)

  const handleLogout = async () => {
    try {
      setIsPending(true)
      await signOut()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden flex sticky mt-4 ml-4">
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" className="flex items-start flex-col gap-6 h-full">
        <SheetHeader>
          <SheetTitle className="font-serif mt-3">Sabor com Amor</SheetTitle>
        </SheetHeader>
        <nav className="grid md:grid-rows-3 text-base items-start w-full gap-2">
          {items.map((item, idx) => {
            const { title, icon, href, isComingSoon } = item

            return (
              <Link
                key={idx}
                href={isComingSoon ? '#' : `${href}`}
                rel="noopener noreferrer"
                className={cn('relative flex flex-col gap-3 px-2 py-[6px] w-full items-start', {
                  'cursor-default': isComingSoon
                })}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}>
                {hoveredIdx === idx && !isComingSoon && (
                  <span className={cn('absolute inset-0 z-0 h-full w-full rounded-md  bg-zinc-300')} />
                )}
                {activeIdx === idx && !isComingSoon && (
                  <motion.div
                    layoutId="clicked-button"
                    transition={{ duration: 0.2 }}
                    className={cn('absolute inset-0 z-[1] rounded-md bg-white shadow-sm')}
                  />
                )}
                <div className="z-[2] flex items-center justify-center gap-6">
                  {isComingSoon ? (
                    <>
                      <div className="blur-sm text-sm flex items-center gap-2">
                        {icon}
                        <p className="font-medium">{title}</p>
                      </div>
                      <span className="text-xs border-[0.5px] border-zinc-400 bg-gradient-to-b from-zinc-200 relative drop-shadow-lg shadow-zinc-950 to-zinc-400 px-1 rounded-full font-medium">
                        Em breve
                      </span>
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      {icon}
                      <p className="font-medium text-sm">{title}</p>
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </nav>
        <SheetFooter className="mt-auto flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <AlertDialog>
            <AlertDialogTrigger className="flex items-center justify-start gap-2 p-2 rounded-md text-sm w-full hover:bg-zinc-300 text-red-600 transition-all duration-300">
              <LogOut className="size-5" />
              <span>Sair</span>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-72 md:w-96 rounded-md">
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza que deseja sair?</AlertDialogTitle>
                <AlertDialogDescription>
                  Essa ação não pode ser desfeita e um novo login será necessário.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="h-8">Cancelar</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button
                    className="bg-red-500/10 text-red-500 hover:bg-red-500/20 h-8 border border-red-300"
                    onClick={handleLogout}
                    disabled={isPending}>
                    {isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Saindo...</span>
                      </>
                    ) : (
                      <span className="flex items-center gap-2">
                        <LogOut className="size-5" /> Sair
                      </span>
                    )}
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
