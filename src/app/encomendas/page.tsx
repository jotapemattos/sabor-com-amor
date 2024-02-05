'use client';

import Image from 'next/image';
import React from 'react';

import delivery from '../../assets/delivery-box.png';
import flower from '../../assets/flor.png';

import Button from '@/components/ButtonComponent';
import { motion as m } from 'framer-motion';

const Page = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <main className=" relative z-10 flex flex-col items-center justify-center gap-20 lg:w-[900px] lg:h-[600px]">
        <div className="flex flex-col items-center justify-center gap-20 pt-20 lg:pt-10 p-2">
          <m.h1
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold"
          >
            Entre em contato e faça seu pedido!
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-[#cea17c] font-bold md:text-center"
          >
            Caso tenha criado interesse por algum de nossos produtos, não perca
            a oportunidade de fazer sua encomenda.{' '}
          </m.p>
        </div>
        <m.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          className="flex flex-col items-center justify-center md:w-[600px]"
        >
          <p className="text-sm lg:text-base font-bold text-white text-center">
            Para encomendar basta enviar uma mensagem pelo WhatsApp informando
            o(s) produto(s) que deseja com a quantidade ao lado.
          </p>
        </m.div>
        <m.a
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
          href="https://api.whatsapp.com/send?phone=5511971673333"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Enviar Mensagem</Button>
        </m.a>
      </main>
      <m.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="rounded-full absolute"
      >
        <Image
          src={delivery}
          alt="delivery box illustration"
          width={500}
          height={500}
          priority
          className="opacity-20"
        />
      </m.div>
      <Image
        src={flower}
        alt="flower illustration"
        className="rounded-full absolute bottom-0 lg:left-2 xl:left-20 hidden lg:block"
      />
    </div>
  );
};

export default Page;
