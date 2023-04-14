function ProjectCard({ name, content, projectCode, live, hashtag, image }) {
    return (
        <div className="grid grid-cols-2 h-[75vh] mb-[12rem] relative shadow-md p-8 divider">
            <img src={image} className="h-full object-contain" />
            <div className="ml-16 flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl text-slate-600 font-bold mb-8">{name}</h1>
                    <p className="text-lg font-light text-slate-500">{content}</p>
                    <div className="mt-4 flex flex-wrap">
                        {
                            hashtag.map((d, i) =>
                                <span key={i} className="bg-cyan-100 mb-4 text-cyan-600 px-4 py-1 rounded font-black mr-4"># {d}</span>
                            )
                        }
                    </div>
                </div>
                <div className="flex">
                    <a href={live} className="mr-8 bg-yellow-400 px-8 py-4 text-lg uppercase rounded-md text-white font-medium transition-colors shadow-lg hover:bg-yellow-500">Live Demo</a>
                    <a href={projectCode} className="bg-yellow-400 px-8 py-4 text-lg uppercase rounded-md text-white font-medium transition-colors shadow-lg hover:bg-yellow-500">Project Code</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;