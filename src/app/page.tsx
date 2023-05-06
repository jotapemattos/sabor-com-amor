import MainContent from '@/components/Home/MainContentComponent';
import ProductsShowCase from '@/components/Home/ProductsShowCaseComponent';

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex pt-20 items-center justify-around">
      <MainContent />
      <ProductsShowCase />
    </div>
  );
}
