import { useState } from "react";
import { Link } from "react-router-dom";
import awLogo from "../../assets/images/logo/aw.svg"


const ProjectsPage = () => {

    const [projectModal, setProjectModal]:[projectModal:any, setProjectModal:Function] = useState("")

    const projects:any = ([
        {
            id: "xequemate",
            projectName: "Xeque Mate Compras",
            link: "https://xequematecompras.com.br/",
            linkTitle: "xequematecompras.com.br",
            image: "img url here",
            description: "For this paid project I built the frontend of a Brazilian e-commerce platform that allows clients and suppliers to securely create an account to buy or sell imported hardware products at a discounted rate. I managed a team of 5 contractors while building the robust and secure front end of the application, in addition to connecting it to various API's and the backend server. Currently I'm learning Ruby, Ruby on Rails, and PosgreSQL in order to perform maintenance on the backend of the platform.",
            stack: "React (Vite) with TypeScript, React-router-dom, SCSS / SASS",
            deployment: "Netlify"
        },
        {
            id: "ataraxia",
            projectName: "Ataraxia",
            link: "https://ataraxia.tokyo/",
            linkTitle: "ataraxia.tokyo",
            image: "",
            description: "I designed and built this project as a way to develop my Vite and TypeScript skills. I chose to build my own world featuring an friendly AI named BIMO who tells his story on the homepage. It also includes an AI-art gallery, relaxing music, and non-traditional web design principles showcasing a Synthwave theme. In the near future I plan to integrate an online clothing store with products featuring the AI art in the gallery.",
            stack: "React (Vite) with TypeScript, React-router-dom, SCSS / SASS",
            deployment: "Netlify"
        },
        {
            id: "resourceful",
            projectName: "Resourceful",
            link: "https://resourceful.tips/",
            linkTitle: "resourceful.tips",
            image: "img url here",
            description: "This was a team collaboration featuring some of my former classmates, as we endeavored to create a coding-resource sharing platform to provide an all-inclusive repository of programming knowledge based on our bootcamp curriculum, and libraries, API's, and frameworks that we've learned since graduating. We simulates sprints, an agile-development environment, and dug in deep to successfully use TypeScript on the front and backend. We also cut our teeth on MongoDB and AWS EC2 cloud servers.",
            stack: "React (Vite) with TypeScript, Node.js, Express, MongoDB, AWS EC2",
            deployment: "AWS EC2, "
        },
        {
            id: "mytutor",
            projectName: "My Language Tutor",
            link: "https://github.com/austinwisdom/austin-wisdom-my-language-tutor",
            linkTitle: "github repo",
            image: "img url here",
            description: "For my bootcamp's capstone project, I built an AI-language tutor capable of providing endless hours of conversation in various languages. Designed as a prototype for an ed-tech startup, it allows users to sharpen their foreign-language skills at 90% less than the cost of hiring a conversation tutor. I used OpenAI's GPT-4 API to power the AI tutor, and implemented Azure coginitive speech services to provide on-demand text-to-speech services. I designed and built this app in two weeks, and have not deployed it yet. In the near future I will take time to overhaul it using my post-bootcamp skills and deploy it to its domain, mylanguagetutor.io.",
            stack: "React (Vite) with TypeScript, React-router-dom, Tailwind, MySQL, OpenAI, Microsoft Azure",
            deployment: "Netlify, Fly.io"
        }
    ]
    )

    const clickHandler = (projectId:string) => {

        const project = projects.find((id:any) => id.id === projectId)
        setProjectModal(project)
    }

    return (
        <main className="bg-neutral-900 w-screen h-screen bg-contain bg-no-repeat bg-[url('./assets/images/logo/projectsImgGray.svg')]">
            <section className="">
            </section>
            <div className="flex content-center items-center pt-8 animate-pulse">
                <Link to={'/'}><img className='h-20' src={awLogo} /></Link>
            </div>

            <div className="z-50 mt-44 sm:mt-0">
                <ul className='bg-red-100 p-4 rounded-2xl sm:w-1/2 sm:p-0 mx-7 sm:h-20 px-4 flex flex-col justify-center content-center items-center md:flex-row md:items-center my-10'>
                    <li className='list-none text-lg sm:text-base text-neutral-950 mx-4 py-4 md:py-0'>
                        <button onClick={()=> clickHandler("xequemate")}  className='transition hover:text-red-600 cursor-pointer'>xequematecompras.com.br
                            {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
                        </button>
                    </li>
                    <li className='list-none text-lg sm:text-base text-neutral-950 mx-4 py-4 md:py-0'>
                        <button onClick={()=> clickHandler("ataraxia")} className='transition hover:text-red-600 cursor-pointer'>ataraxia.tokyo
                          {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
                        </button>
                    </li>
                    <li className='list-none text-lg sm:text-base text-neutral-950 mx-4 py-4 md:py-0'>
                        <button onClick={()=> clickHandler("resourceful")} className='transition hover:text-red-600 cursor-pointer'>resourceful.tips
                          {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
                        </button>
                    </li>
                    <li className='list-none text-lg sm:text-base text-neutral-950 mx-4 py-4 md:py-0'>
                        <button onClick={()=> clickHandler("mytutor")} className='transition hover:text-red-600 cursor-pointer'>mylanguagetutor.io
                          {/* <span className="absolute inset-x-1 -bottom-px h-px w-full bg-gradient-to-r from red-500/0 via-red-500/40 to-red-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0"></span> */}
                        </button>
                    </li>
                </ul>
                    {/* <h1 className="text-red-500">what's happening?</h1> */}
                    {projectModal && (
                        <div className="bg-red-100 rounded-2xl sm:w-1/2 mx-7 h-full px-4 flex flex-col justify-center content-center p-4 my-10">
                            <ul>
                                <li className="py-2">
                                    <h1 className="text-red-500">name: <span className="text-neutral-950">{projectModal.projectName}</span></h1>
                                </li>
                                <li className="py-2">
                                    <p className="text-red-500">desc: <span className="text-neutral-950">{projectModal.description}</span></p>
                                </li>
                                <li className="py-2 text-red-500">URL: <a target="_blank" className="text-neutral-950 hover:text-red-500" href={projectModal.link}>{projectModal.linkTitle}</a></li>
                                <li className="py-2">
                                    <p className="text-red-500">stack: <span className="text-neutral-950">{projectModal.stack}</span></p>
                                </li>
                            </ul>
                        </div>
                    )}
            </div>
        </main>
    );
};

export default ProjectsPage;