'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Separator } from '../ui/separator'

import { cn } from '@/lib/utilsComponent'
import { motion } from 'framer-motion'
import { LayoutDashboard, Box, LineChart } from 'lucide-react'

interface NavItems {
  title: string
  icon: JSX.Element
  href: string
  className?: string
  isComingSoon?: boolean
}

export function AdminNavbar() {
  const items: NavItems[] = [
    {
      title: 'Produtos',
      icon: <Box className="size-5" />,
      href: '/admin/products'
    },
    {
      title: 'Dashboard',
      icon: <LayoutDashboard className="size-5" />,
      href: '/admin/',
      className: '',
      isComingSoon: true
    },
    {
      title: 'Dados',
      icon: <LineChart className="size-5" />,
      href: '/admin/',
      isComingSoon: true
    }
  ]

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [activeIdx, setActiveIdx] = useState<number>(0)

  return (
    <aside className="fixed left-0 p-2 bg-zinc-200 border-zinc-300 h-full border flex flex-col items-start gap-6 rounded-e-2xl">
      <div className="flex items-center justify-center gap-2 p-2">
        <Image
          src={'/logo.png'}
          alt="logo image"
          className="size-8 aspect-square object-cover"
          width={500}
          height={500}
        />
        <h1 className="font-serif text-xl text-center">Sabor com amor Admin</h1>
      </div>
      <Separator className="bg-zinc-300" />
      <nav className={cn('grid md:grid-rows-3 text-base items-start w-full gap-2')}>
        {items.map((item, idx) => {
          const { title, icon, href, isComingSoon } = item

          return (
            <Link
              key={idx}
              href={`${href}`}
              rel="noopener noreferrer"
              className={cn('relative flex flex-col gap-3 px-2 py-[6px] w-full items-start')}
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
                    <div className="blur-sm flex items-center gap-2">
                      {icon}
                      <p className="font-medium">{title}</p>
                    </div>
                    <div className="group relative grid overflow-hidden rounded-full px-3 py-1 shadow-md transition-colors duration-200">
                      <span>
                        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                      </span>
                      <span className="backdrop absolute inset-px rounded-full bg-gradient-to-b from-zinc-400 to-zinc-300 transition-colors duration-200 group-hover:bg-neutral-900" />
                      <span className="z-10 text-zinc-900 text-xs font-medium">Em breve</span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    {icon}
                    <p className="font-medium">{title}</p>
                  </div>
                )}
              </div>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
