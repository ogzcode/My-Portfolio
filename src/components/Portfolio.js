import "./Portfolio.css";

const projectData = [
    {
        "name": "React Dictionary App",
        "content": `İngilizce kelimelerin anlamlarını API aracılığı ile bulmanızı sağlayacak uygulama.`,
        "link": "https://github.com/ogzcode/React-Dictionary-App"
    },
    {
        "name": "React Quiz App",
        "content": `Open Trivia DB API kullanılarak oluşturulan Quiz uygulaması.`,
        "link": "https://github.com/ogzcode/React-Quiz-App"
    },
    {
        "name": "React Memory Game",
        "content": "React.js ile geliştirdiğim hayvan resimlerini bulmak için oynayabileceğiniz hafıza oyunu.",
        "link": "https://github.com/ogzcode/React-Memory-Game"
    },
    {
        "name": "React Rick Morty Character App",
        "content": "Rick Morty karakterlerinin ve karakter özelliklerinin API kullanılarak sunulduğu uygulama.",
        "link": "https://github.com/ogzcode/Rick-Morty-Character-App-With-React"
    },
    {
        "name": "React Advice Generator",
        "content": "Rastgele tavsiye veren Frontend Mentor görevi örnek kodları.",
        "link": "https://github.com/ogzcode/FM-Advice-Generator-App-With-React"
    },
    {
        "name": "React Emoji Search App",
        "content": "Veritabanında kayıtlı emojileri arayabilmenizi sağlayabilecek uygulama.",
        "link": "https://github.com/ogzcode/Emoji-Search-App"
    }
];

function RepoBox({projectName,projectContent, projectLink}) {
    return (
        <div className="card p-0 project__card">
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{projectName}</h5>
                <p className="card-text">
                    {projectContent}
                </p>
                <a href={projectLink} className="btn btn-success">Github Link</a>
            </div>
        </div>
    );
}

function Portfolio() {
    return (
        <div className='portfolio' id="portfolio">
            <h1 className='portfolio__header text-center' style={{ fontSize: "3rem" }}>Projeler</h1>
            <div className='row row-cols-xl-3 row-cols-lg-2 row-cols-sm-1 px-5'>
                {
                    projectData.map((d, i,) =>
                        <div className='col d-flex justify-content-center my-4' key={i}>
                            <RepoBox 
                                projectName={d.name} 
                                projectContent={d.content} 
                                projectLink={d.link}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Portfolio;