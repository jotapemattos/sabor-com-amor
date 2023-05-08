'use client';

import Link from 'next/link';
import React from 'react';

import { motion as m } from 'framer-motion';

const MainContent = () => {
  return (
    <main className="relative z-10 flex flex-col items-start justify-start gap-20 w-[578px]">
      <m.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-7xl font-bold text-white"
      >
        Sabor com Amor
      </m.h1>
      <m.h3
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-3xl font-bold text-[#A66758]"
      >
        Comida preparada com amor conquista paladar e coração.
      </m.h3>
      <m.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="text-lg text-white text-start"
      >
        Venho de uma família que tem ótimas memórias da comida afetiva.
        Lembranças com cheiro e sabor ao redor da mesa. Minha mãe sempre
        preparando tudo em casa, as refeições, sobremesas, bolos, pães e os
        doces de frutas que até hoje faz como ninguém. Não sei direito quando
        comecei, fui acumulando conhecimento, técnicas e novas receitas, mas
        ainda preparo algumas “a olho”. O cookie foi o primeiro produto que
        comercializei e até hoje está entre os mais procurados. Minha refeição
        preferida é o café/lanche e até por isso amo preparar pães.
      </m.p>
      <Link href={'/produtos'}>
        <m.button
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          className="bg-[#694A43] w-[219px] h-14 rounded-2xl text-white hover:opacity-40 transition-opacity duration-300 "
        >
          Ver produtos
        </m.button>
      </Link>
    </main>
  );
};

export default MainContent;
