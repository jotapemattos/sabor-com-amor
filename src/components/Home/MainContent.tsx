import Link from 'next/link';
import React from 'react';

const MainContent = () => {
  return (
    <main className="relative z-10 flex flex-col items-start justify-start gap-20 w-[578px]">
      <h1 className="text-7xl font-bold text-white">Sabor com Amor</h1>
      <h3 className="text-3xl font-bold text-[#A66758]">
        Comida preparada com amor conquista paladar e coração.
      </h3>
      <p className="text-lg text-white text-start">
        Venho de uma família que tem ótimas memórias da comida afetiva.
        Lembranças com cheiro e sabor ao redor da mesa. Minha mãe sempre
        preparando tudo em casa, as refeições, sobremesas, bolos, pães e os
        doces de frutas que até hoje faz como ninguém. Não sei direito quando
        comecei, fui acumulando conhecimento, técnicas e novas receitas, mas
        ainda preparo algumas “a olho”. O cookie foi o primeiro produto que
        comercializei e até hoje está entre os mais procurados. Minha refeição
        preferida é o café/lanche e até por isso amo preparar pães.
      </p>
      <Link href={'/produtos'}>
        <button className="bg-[#694A43] w-[219px] h-14 rounded-2xl text-white hover:opacity-40 transition-all duration-300">
          Ver produtos
        </button>
      </Link>
    </main>
  );
};

export default MainContent;
