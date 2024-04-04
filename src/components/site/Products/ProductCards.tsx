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
        className="w-64 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-3xl relative shadow-xl gap-4 rounded-lg "
      >
        <span className="absolute bg-[#081930] rounded-full p-2 right-2 top-2">
          <p className="text-sm text-white font-extrabold">
            R$ {product.price}
          </p>
        </span>
        <Image
          src={product.image}
          alt={`${product.name}image`}
          width={500}
          height={500}
          className="rounded-t-lg aspect-square object-cover"
        />
        <div className="flex flex-col gap-2 p-2">
          <h1 className="text-lg text-white font-semibold">{`${product.name}`}</h1>
          <p className="text-base text-white">{product.quantity}</p>
        </div>
      </m.div>
    </>
  );
};

export default ProductCards;
