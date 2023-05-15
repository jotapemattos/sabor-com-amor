'use client';

import Link from 'next/link';
import React from 'react';

import Button from '../Button';

import { motion as m } from 'framer-motion';

const MainContent = () => {
  return (
    <main className="relative z-10 flex flex-col p-4 xl:p-0 items-start md:items-center lg:items-start justify-start gap-14 xl:gap-20 lg:w-[578px]">
      <m.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-5xl xl:text-7xl font-bold text-white"
      >
        Sabor com Amor
      </m.h1>
      <m.h3
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-2xl xl:text-3xl font-bold text-[#cea17c]"
      >
        Comida preparada com amor conquista paladar e coração.
      </m.h3>
      <m.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="text-base xl:text-base text-white text-start md:text-justify lg:text-start"
      >
        &quot;Venho de uma família que tem ótimas memórias da comida afetiva.
        Lembranças com cheiro e sabor ao redor da mesa. Minha mãe sempre
        preparando tudo em casa, as refeições, sobremesas, bolos, pães e os
        doces de frutas que até hoje faz como ninguém. Não sei direito quando
        comecei, fui acumulando conhecimento, técnicas e novas receitas, mas
        ainda preparo algumas “a olho”. O cookie foi o primeiro produto que
        comercializei e até hoje está entre os mais procurados. Minha refeição
        preferida é o café/lanche e até por isso amo preparar pães.&quot;
      </m.p>
      <m.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.7 }}
      >
        <Link href={'/produtos'}>
          <Button>Ver produtos</Button>
        </Link>
      </m.div>
    </main>
  );
};

export default MainContent;
