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
        <h1 className="font-serif text-xl text-center">Sabor com Amor</h1>
      </div>
      <Separator className="bg-zinc-300" />
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
                    <div className="blur-sm flex items-center gap-2">
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
