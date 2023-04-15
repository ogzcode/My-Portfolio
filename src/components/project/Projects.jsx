import bg from "../../image/home-bg.svg";

import ProjectCard from "./ProjectCard";

import { data } from "./data";

function Projects() {
    return (
        <div className="min-h-screen">
            <div className="relative flex justify-center items-center h-[50vh]">
                <h1 className="about__text text-4xl text-slate-700 relative text-center">Projeler</h1>
                <img src={bg} className="absolute top-0 left-0 w-full h-full -z-10" />
            </div>
            <div className="py-24 px-8">
                {
                    data.map((d, i) => <ProjectCard {...d} key={i} />)
                }
            </div>
        </div>
    );
}

export default Projects;