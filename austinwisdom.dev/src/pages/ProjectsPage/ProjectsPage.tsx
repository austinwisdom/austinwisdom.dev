import { Link } from "react-router-dom";
import awLogo from "../../assets/images/logo/aw.svg"

const ProjectsPage = () => {
    return (
        <main className="bg-neutral-900 w-screen h-screen bg-contain bg-no-repeat bg-[url('./assets/images/logo/projectsImgGray.svg')]">
            <section className="">
            </section>
            <div className="flex content-center items-center">
                <Link to={'/'}><img className='h-20' src={awLogo} /></Link>
            </div>
        </main>
    );
};

export default ProjectsPage;