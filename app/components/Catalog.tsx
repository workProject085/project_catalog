import Card from '@/app/components/Card';
import { getData } from '@/app/api/getData';

const Catalog = async () => {
  const catalog = await getData();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[10px] sm:px-6 md:px-8 lg:px-10 py-[10px] md:py-[20px]'>
      {catalog?.map((card: any, index: number) => (
        <Card data={card} key={index} />
      ))}
    </div>
  );
};
export default Catalog;
