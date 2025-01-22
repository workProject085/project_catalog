import Catalog from '@/app/components/Catalog';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import VideoContainer from '@/app/components/VideoContainer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center bg-bg'>
      <Header />
      <Catalog />
      <VideoContainer />
      <Footer />
    </main>
  );
}
