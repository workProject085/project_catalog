import Image from 'next/image';

export default function Header() {
  return (
    <nav className='flex justify-between items-center bg-white w-full h-[80px] md:h-[110px] border-b-2 border-border'>
      <Image src='/logo.jpg' alt='Vercel Logo' width={300} height={100} priority className='h-[60px] md:h-[90px] w-auto mx-auto' />
    </nav>
  );
}
