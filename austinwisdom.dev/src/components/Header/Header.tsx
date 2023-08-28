import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className='justify-center sm:justify-end flex flex-row bg-red-100'>
        
        <ul className='bg-neutral-950 rounded-2xl w-1/2 mx-7 h-10  flex flex-row content-end my-5'>
          <li className='list-none text-red-100 px-4 self-center'>
            <NavLink to={"/"}  className='transition hover:text-red-600 cursor-pointer'><button>
            home
            </button>
              {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
            </NavLink>
          </li>
          <li className='list-none text-red-100 px-4 self-center'>
            <NavLink to={"/about"} className='transition hover:text-red-600 cursor-pointer'>about
              {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
            </NavLink>
          </li>
          <li className='list-none text-red-100 px-4 self-center'>
            <NavLink to={"/projects"} className='transition hover:text-red-600 cursor-pointer'>projects
              {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
};

export default Header;