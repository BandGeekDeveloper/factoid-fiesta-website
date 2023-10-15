import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <div className='w-[95%] shadow-lg navbar bg-neutral mx-auto mt-4 rounded-lg'>
      <div className='min-w-full min-h-full lg:justify-end navbar-start'>
        <div className='dropdown lg:hidden'>
          <label tabIndex={0} className='btn btn-ghost'>
            <HiMenuAlt1 className='text-base-100' />
          </label>
        </div>
        <div className='hidden lg:flex text-base-100'>
          <ul className='flex flex-row justify-end m-auto mr-6 space-x-4'>
            <li>
              <button className='normal-case btn btn-ghost hover:bg-base-100/25'>
                <Link href='/'>Home</Link>
              </button>
            </li>
            <li>
              <button className='normal-case btn btn-ghost hover:bg-base-100/25'>
                <Link href='/Quizzes'>Quizzes</Link>
              </button>
            </li>
            <li>
              <button className='normal-case btn btn-ghost hover:bg-base-100/25'>
                <Link href='/Create'>Create Quiz</Link>
              </button>
            </li>
            <li>
              <button className='normal-case btn btn-ghost hover:bg-base-100/25'>
                <Link href='/Bot'>Discord Bot</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
