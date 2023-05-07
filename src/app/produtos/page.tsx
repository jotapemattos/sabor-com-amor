'use client';

import React from 'react';

import { data, DataProps } from '../../data/data';

import ProductCards from '@/components/Products/ProductCardsComponent';

const Page = () => {
  const products: Array<DataProps> = data;

  return (
    <div className="grid grid-cols-4 place-items-center gap-20 pt-32 pb-20 relative z-0">
      {products.map((product) => (
        <ProductCards key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Page;
