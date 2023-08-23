const Header = () => {
    return (
        <nav className='justify-end flex flex-row bg-red-100'>
        {/* <img className='h-16' src={awLogo} /> */}
        <ul className='bg-neutral-950 rounded-2xl w-1/2 mx-7 h-10 px-4 flex flex-row content-end my-5'>
          <li className='list-none text-red-100 mx-4 self-center'>
            <a className='transition hover:drop-shadow-3xl cursor-pointer'>home
              <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span>
            </a>
          </li>
          <li className='list-none text-red-100 mx-4 self-center'>
            <a className='transition hover:drop-shadow-3xl cursor-pointer'>about
              <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span>
            </a>
          </li>
          <li className='list-none text-red-100 mx-4 self-center'>
            <a className='transition hover:drop-shadow-3xl cursor-pointer'>projects
              <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span>
            </a>
          </li>
        </ul>
      </nav>
    );
};

export default Header;