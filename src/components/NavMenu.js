import { HiMenuAlt1 } from 'react-icons/hi';

const NavMenu = () => {
  return (
    <div className='navbar bg-neutral'>
      <div className='min-w-full min-h-full lg:justify-end navbar-start'>
        <div className='dropdown lg:hidden'>
          <label tabIndex={0} className='btn btn-ghost'>
            <HiMenuAlt1 className='text-base-100' />
          </label>
        </div>
        <div className='hidden lg:flex lg:flex-col text-base-100 '>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
