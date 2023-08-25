// import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='justify-center sm:justify-start flex flex-row bg-neutral-950'>
        
        {/* <ul className='bg-neutral-950 rounded-2xl w-1/2 mx-7 h-10 px-4 flex flex-row content-start my-5'>
          <li className='list-none text-red-100 mx-4 self-center'>
            <NavLink to={"/"}  className='transition hover:drop-shadow-3xl cursor-pointer'>home
              
            </NavLink>
          </li>
          <li className='list-none text-red-100 mx-4 self-center'>
            <NavLink to={"/about"} className='transition hover:drop-shadow-3xl cursor-pointer'>about
              
            </NavLink>
          </li>
          <li className='list-none text-red-100 mx-4 self-center'>
            <NavLink to={"/projects"} className='transition hover:drop-shadow-3xl cursor-pointer'>projects
             
            </NavLink>
          </li>
        </ul> */}
        <div className="text-red-100 self-center h-full">
            <p className="text-right px-5 py-5">© Austin Wisdom. All rights reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;