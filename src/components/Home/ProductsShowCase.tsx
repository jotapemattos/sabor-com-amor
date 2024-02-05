'use client';

import Image from 'next/image';
import React from 'react';

import brownie from '../../assets/brownie.svg';
import cookie from '../../assets/cookies.svg';
import paoCaseiro from '../../assets/pao-caseiro-italiano 1.svg';
import waffle from '../../assets/waffle-2-discos 1.svg';

import { motion as m } from 'framer-motion';

const ProductsShowCase = () => {
  return (
    <aside className="flex flex-col items-end justify-center w-full md:w-[600px] p-4 xl:p-0 gap-14 lg:gap-0">
      <m.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="flex items-center justify-start w-full"
      >
        <Image
          src={waffle}
          alt="waffle illustration"
          className="w-32 h-32 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-full border-2 border-[#cea17c]"
        />
        <div className="flex flex-col justify-center text-white items-center">
          <p>Waffle</p>
          <m.span className="h-[1px] w-28 bg-[#cea17c]" />
        </div>
      </m.span>
      <m.span
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="flex items-center justify-end w-full"
      >
        <div className="flex flex-col justify-center text-white items-center">
          <p>Cookies</p>
          <m.span className="h-[1px] w-28 bg-[#cea17c]" />
        </div>
        <Image
          src={cookie}
          alt="cookie illustration"
          className="w-32 h-32 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-full border-2 border-[#cea17c]"
        />
      </m.span>
      <m.span
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.6 }}
        className="flex items-center justify-start w-full"
      >
        <Image
          src={brownie}
          alt="brownie illustration"
          className="w-32 h-32 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-full border-2 border-[#cea17c]"
        />
        <div className="flex flex-col justify-center text-white items-center">
          <p>Brownie</p>
          <m.span className="h-[1px] w-28 bg-[#cea17c]" />
        </div>
      </m.span>
      <m.span
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.8 }}
        className="flex items-center justify-end w-full"
      >
        <div className="flex flex-col justify-center text-white items-center">
          <p>Pão Caseiro</p>
          <m.span className="h-[1px] w-32 bg-[#cea17c]" />
        </div>
        <Image
          src={paoCaseiro}
          alt="paoCaseiro illustration"
          className="w-32 h-32 md:w-36 md:h-36 xl:w-44 xl:h-44 rounded-full border-2 border-[#cea17c]"
        />
      </m.span>
    </aside>
  );
};

export default ProductsShowCase;
