import Image from 'next/image';
import React from 'react';

import { DataProps } from '@/data/dataComponent';

interface ProductProps {
  product: DataProps;
}

const ProductCards = ({ product }: ProductProps) => {
  return (
    <>
      <div className="w-[250px] h-[342px] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg gap-4 rounded-lg ">
        <span className="absolute bg-black rounded-full p-2 right-2 top-2">
          <p className="text-sm text-white font-bold">R$ {product.price}</p>
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
      </div>
    </>
  );
};

export default ProductCards;
