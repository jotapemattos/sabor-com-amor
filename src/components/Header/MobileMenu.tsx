import Link from 'next/link';

interface IsOpenProps {
  setIsOpen: (b: boolean) => void;
}

const MobileMenu = ({ setIsOpen }: IsOpenProps) => {
  return (
    <div className="mobilemenu w-full h-screen left-0 mt-8 absolute p-4 text-white flex flex-col items-center justify-start">
      <span className="flex flex-col pt-10 gap-20 items-center text-white text-2xl font-bold">
        <Link href={'/'} onClick={() => setIsOpen(false)}>
          <p className="hover:text-[#cea17c] transition-colors duration-300">
            Sobre
          </p>
        </Link>
        <Link href={'/produtos'} onClick={() => setIsOpen(false)}>
          <p className="hover:text-[#cea17c] transition-colors duration-300">
            Produtos
          </p>
        </Link>
        <Link href={'/encomendas'} onClick={() => setIsOpen(false)}>
          <p className="hover:text-[#cea17c] transition-colors duration-300">
            Encomendas
          </p>
        </Link>
      </span>
    </div>
  );
};

export default MobileMenu;
