'use client';

import React from 'react';

import { DataProps, data } from '../../data/data';

import ProductCards from '@/components/Products/ProductCardsComponent';

const Page = () => {
  const products: Array<DataProps> = data;

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-2xl w-full mx-auto flex flex-wrap items-start justify-center gap-24 pt-32 pb-20 relative z-0">
        {products.map((product, i) => (
          <ProductCards key={i} product={product} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
