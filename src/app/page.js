import './globals.css';
import NavMenu from './components/NavMenu';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <NavMenu />
      <div className='flex flex-col justify-center w-full h-screen m-auto align-middle'>
        <p className='text-5xl text-center'>Factoid Fiesta!</p>
        <p className='w-1/2 mx-auto my-8 text-xl text-center'>
          Discover, play and test your knowledge in our trivia playground. Put
          your brain to the test, compete with friends, and learn something new
          every day. Join us for a trivia adventure that's as entertaining as it
          is educational!
        </p>
        <div className='flex justify-between w-1/2 mx-auto align-middle'>
          <button className='rounded-full shadow-lg btn btn-accent'>
            <Link href='/Quizzes'>Test your knowledge</Link>
          </button>
          <button className='rounded-full shadow-lg btn btn-primary'>
            <Link href='/Create'>Create your own quiz</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
