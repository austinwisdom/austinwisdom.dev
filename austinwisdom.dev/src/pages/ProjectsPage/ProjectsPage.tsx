import { Link } from "react-router-dom";
import awLogo from "../../assets/images/logo/aw.svg"

const ProjectsPage = () => {
    return (
        <main className="bg-neutral-900 w-screen h-screen bg-contain bg-no-repeat bg-[url('./assets/images/logo/projectsImgGray.svg')]">
            <section className="">
            </section>
            <div className="flex content-center items-center pt-8 animate-pulse">
                <Link to={'/'}><img className='h-20' src={awLogo} /></Link>
            </div>

            <div>
                <ul className='bg-red-100 rounded-2xl sm:w-1/2 mx-7 h-20 px-4 flex flex-col justify-center content-center md:flex-row md:items-center my-10'>
                    <li className='list-none text-neutral-950 mx-4 '>
                        <button  className='transition hover:text-red-600 cursor-pointer'>xequematecompras.com.br
                            {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
                        </button>
                    </li>
                    <li className='list-none text-neutral-950 mx-4'>
                        <button className='transition hover:text-red-600 cursor-pointer'>ataraxia.tokyo
                          {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
                        </button>
                    </li>
                    <li className='list-none text-neutral-950 mx-4'>
                        <button className='transition hover:text-red-600 cursor-pointer'>resourceful.tips
                          {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
                        </button>
                    </li>
                    <li className='list-none text-neutral-950 mx-4'>
                        <button className='transition hover:text-red-600 cursor-pointer'>mylanguagetutor.io
                          {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
                        </button>
                    </li>
        </ul>
            </div>
        </main>
    );
};

export default ProjectsPage;