import { HiMenuAlt1 } from 'react-icons/hi';

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
              <button href='/' id='home' className='btn btn-ghost'>
                Home
              </button>
            </li>
            <li>
              <button href='/quizzes' id='quizzes' className='btn btn-ghost'>
                Quizzes
              </button>
            </li>
            <li>
              <button href='/create' id='create' className='btn btn-ghost'>
                Create
              </button>
            </li>
            <li>
              <button href='/bot' id='discordBot' className='btn btn-ghost'>
                Discord Bot
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
