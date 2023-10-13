import { HiMenuAlt1 } from 'react-icons/hi';

const NavMenu = () => {
  return (
    <div className='navbar bg-neutral'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <HiMenuAlt1 className='text-base-100' />
          </label>
          <ul className='flex flex-row justify-items-end text-base-100'>
            <li>Home</li>
            <li>New Quiz</li>
            <li>High Scores</li>
            <li>Discord Bots</li>
            <li>Contact the Dev</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
