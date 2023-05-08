import Image from 'next/image';
import React from 'react';

import { DataProps } from '@/data/dataComponent';
import { motion as m } from 'framer-motion';

interface ProductProps {
  product: DataProps;
  index: number;
}

const ProductCards = ({ product, index }: ProductProps) => {
  return (
    <>
      <m.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 * (index + 2) }}
        className="w-[250px] h-[342px] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-3xl relative shadow-xl gap-4 rounded-lg "
      >
        <span className="absolute bg-[#181516] rounded-full p-2 right-2 top-2">
          <p className="text-sm text-white">R$ {product.price}</p>
        </span>
        <Image
          src={product.image}
          alt={product.name + 'image'}
          className="rounded-t-lg "
        />
        <main className="flex flex-col gap-4 p-2">
          <h1 className="text-lg text-white ">{`${product.name} (${product.quantity})`}</h1>
          {/* <p className="text-sm text-">{product.description}</p> */}
        </main>
      </m.div>
    </>
  );
};

export default ProductCards;
