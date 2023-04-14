import bg from "../../image/home-bg.svg";

import todoRedux from "./img/todo-redux.png";
import sunny from "./img/sunny.png";
import note from "./img/note-app.png";
import quiz from "./img/Quiz-app.png";

import ProjectCard from "./ProjectCard";
function Projects() {
    const data = [
        {
            name: "Todo App with Redux",
            content: "Redux öğrenme sürecimde geliştirdiğim örnek uygulama. Bu uygulama ile temel Redux kavramlarını öğrendim. Store,Dispatch,Reducers,useSelector,useDispatch bu süreçte öğrendiğim ve uyguladığım temel kavramlar oldu",
            projectCode: "https://github.com/ogzcode/Todo-App-with-Redux",
            live: "https://ogzcode.github.io/Todo-App-with-Redux/",
            hashtag: ["react", "redux", "tailwind"],
            image: todoRedux
        },
        {
            name: "Sunnyside Agency Landing Page",
            content: "React.js ve Tailwind.css becerilerimi geliştirmek için Frontend Mentor adlı sitede bulunan görevi gerçekleştirdim.Responsive tasarım uygulayarak mobil duyarlı hale getirdim.",
            projectCode: "https://github.com/ogzcode/FM-Sunnyside-agency-landing-page",
            live: "https://ogzcode.github.io/FM-Sunnyside-agency-landing-page/",
            hashtag: ["react", "ui/ux", "frontendmentor","tailwind"],
            image: sunny
        },
        {
            name: "React Note App",
            content: "React.js de state yönetimi için kullanılan yöntemlerden biri olan Context API yi basit bir not uyuglaması ile uyguladım.Projede notlarınızı tarayıcınıza kaydedebilmeniz için aynı zamanda localStorage API de kullandım.",
            projectCode: "https://github.com/ogzcode/React-Note-App",
            live: "https://react-note-app-three.vercel.app/",
            hashtag: ["react", "ui/ux", "context API", "localstorage", "pure css"],
            image: note
        },
        {
            name: "React Quiz App",
            content: "React.js ve axios kütüphanesini kullanarak geliştirdiğim anonim bir API dan veri çekerek bunları kullanıcıya çoktan seçmeli soru şeklinde soran bir uygulama.",
            projectCode: "https://github.com/ogzcode/React-Quiz-App",
            live: "https://react-quiz-app-ogzcode.vercel.app/",
            hashtag: ["react", "ui/ux", "axios", "REST API", "pure css", "useEffect"],
            image: quiz
        }
    ];
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