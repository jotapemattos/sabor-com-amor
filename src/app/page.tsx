import MainContent from '@/components/Home/MainContentComponent';
import ProductsShowCase from '@/components/Home/ProductsShowCaseComponent';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col lg:flex-row pt-28 xl:pt-32 2xl:pt-20 xl:pb-10 2xl:pb-0 items-center justify-around gap-14 xl:gap-0">
      <MainContent />
      <ProductsShowCase />
    </div>
  );
}
