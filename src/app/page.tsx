import { Navbar } from './components/navbar/navbar';
import { AboutMe } from './components/About-Me/AboutMe';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-4'>
      <Navbar />
      <AboutMe />
    </main>
  );
}
