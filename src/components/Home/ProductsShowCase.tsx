import Image from 'next/image';
import React from 'react';

import brownie from '../../assets/brownie.svg';
import cookie from '../../assets/cookies.svg';
import paoCaseiro from '../../assets/pao-caseiro-italiano 1.svg';
import waffle from '../../assets/waffle-2-discos 1.svg';

const ProductsShowCase = () => {
  return (
    <aside className="flex flex-col items-end justify-center w-[600px]">
      <span className="flex items-center justify-start w-full">
        <Image
          src={waffle}
          alt="waffle illustration"
          className="w-44 h-44 rounded-full border-2 border-[#694A43]"
        />
        <div className="flex flex-col justify-center text-white items-center">
          <p>Waffle</p>
          <span className="h-[1px] w-28 bg-white"></span>
        </div>
      </span>
      <span className="flex items-center justify-end w-full">
        <div className="flex flex-col justify-center text-white items-center">
          <p>Cookies</p>
          <span className="h-[1px] w-28 bg-white"></span>
        </div>
        <Image
          src={cookie}
          alt="cookie illustration"
          className="w-44 h-44 rounded-full border-2 border-[#694A43]"
        />
      </span>
      <span className="flex items-center justify-start w-full">
        <Image
          src={brownie}
          alt="brownie illustration"
          className="w-44 h-44 rounded-full border-2 border-[#694A43]"
        />
        <div className="flex flex-col justify-center text-white items-center">
          <p>Brownie</p>
          <span className="h-[1px] w-28 bg-white"></span>
        </div>
      </span>
      <span className="flex items-center justify-end w-full">
        <div className="flex flex-col justify-center text-white items-center">
          <p>Pão Caseiro</p>
          <span className="h-[1px] w-40 bg-white"></span>
        </div>
        <Image
          src={paoCaseiro}
          alt="paoCaseiro illustration"
          className="w-44 h-44 rounded-full border-2 border-[#694A43]"
        />
      </span>
    </aside>
  );
};

export default ProductsShowCase;
