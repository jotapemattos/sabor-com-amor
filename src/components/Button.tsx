import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-[#cea17c] rounded-lg px-10 py-4 text-[#081930] font-bold hover:bg-[#644f3d] transition-all duration-300">
      {children}
    </button>
  );
};

export default Button;
