import { useState } from 'react';

import MobileMenu from './MobileMenu';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-8 my-1 bg-white transition ease transform duration-300`;

  return (
    <div className="w-auto lg:hidden">
      <button
        className="flex flex-col h-8 w-full rounded justify-center items-end group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? 'rotate-45 translate-y-2 opacity-80 group-hover:opacity-100'
              : 'opacity-80 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? '-rotate-45 -translate-y-3 opacity-80 group-hover:opacity-100'
              : 'opacity-80 group-hover:opacity-100'
          }`}
        />
      </button>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </div>
  );
};

export default HamburgerIcon;
