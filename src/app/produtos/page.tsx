'use client';

import React from 'react';

import { data, DataProps } from '../../data/data';

import ProductCards from '@/components/Products/ProductCardsComponent';

const Page = () => {
  const products: Array<DataProps> = data;

  return (
    <div className="flex items-center justify-center">
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-20 pt-32 pb-20 relative z-0">
        {products.map((product, i) => (
          <ProductCards key={product.name} product={product} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
