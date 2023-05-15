import React from 'react';

import { motion as m } from 'framer-motion';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <m.button className="bg-[#cea17c] rounded-2xl px-10 py-4 text-[#081930] font-bold hover:bg-[#644f3d] transition-all duration-300">
      {children}
    </m.button>
  );
};

export default Button;
