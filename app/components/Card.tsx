import ButtonWithModal from '@/app/components/Modal';
import Image from 'next/image';

export default function Card({ data }: any) {
  return (
    <div className='w-full h-auto border border-border text-center bg-white flex flex-col justify-end overflow-hidden shadow-md'>
      <Image src={`/${data.images[0]}`} alt='news_image' width={300} height={140} priority className='object-cover w-full h-full max-h-[450px]' />
      <ButtonWithModal data={data} />
    </div>
  );
}
