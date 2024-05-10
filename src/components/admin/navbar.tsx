'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Separator } from '../ui/separator'

import { cn } from '@/lib/utilsComponent'
import { AnimatePresence, motion } from 'framer-motion'
import { LayoutDashboard, Box, LineChart } from 'lucide-react'

export function AdminNavbar() {
  const items = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard className="size-5" />,
      href: '/dashboard'
    },
    {
      title: 'Produtos',
      icon: <Box className="size-5" />,
      href: '/dashboard/products'
    },
    {
      title: 'Dados',
      icon: <LineChart className="size-5" />,
      href: '/dashboard/analytics'
    }
  ]
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  return (
    <aside className="fixed left-0 p-4 bg-zinc-200 border-zinc-300 h-full border flex flex-col items-start gap-6 rounded-e-2xl">
      <div className="flex flex-col items-center justify-center gap-2 p-2">
        <Image
          src={'/logo.png'}
          alt="logo image"
          className="size-10 aspect-square object-cover"
          width={500}
          height={500}
        />
        <h1 className="font-serif text-xl text-center">
          Sabor com amor <br />
          Admin
        </h1>
      </div>
      <Separator className="bg-zinc-300" />
      <nav className={cn('flex flex-col items-start w-full')}>
        {items.map((item, idx) => {
          const { title, icon, href } = item

          return (
            <Link
              key={idx}
              href={`${href}`}
              rel="noopener noreferrer"
              className={cn('relative flex flex-col gap-3 p-2 w-full items-start')}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}>
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.span
                    className={cn('absolute inset-0 z-0 block h-full w-full rounded-xl bg-zinc-300')}
                    layoutId="cardHoverEffect"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 }
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 }
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="z-[1] flex items-center justify-center gap-4">
                {icon}
                <p className="font-medium">{title}</p>
              </div>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
