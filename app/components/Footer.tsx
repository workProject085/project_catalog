export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center bg-border w-full h-[110px] gap-y-[15px]'>
      <h1 className='text-lg'>Свяжитесь с нами</h1>
      <p>
        <a href='tel:+994504350010' className='text-white hover:text-footerText'>
          +994 (50) 435-00-10
        </a>
      </p>
    </footer>
  );
}
