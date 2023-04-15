import todoRedux from "./img/todo-redux.png";
import sunny from "./img/sunny.png";
import note from "./img/note-app.png";
import quiz from "./img/Quiz-app.png";
import odin from "./img/odin.png";
import memory from "./img/memory.png";

export const data = [
  {
    name: "Todo App with Redux",
    content:
      "Redux öğrenme sürecimde geliştirdiğim örnek uygulama. Bu uygulama ile temel Redux kavramlarını öğrendim. Store,Dispatch,Reducers,useSelector,useDispatch bu süreçte öğrendiğim ve uyguladığım temel kavramlar oldu",
    projectCode: "https://github.com/ogzcode/Todo-App-with-Redux",
    live: "https://ogzcode.github.io/Todo-App-with-Redux/",
    hashtag: ["react", "redux", "tailwind"],
    image: todoRedux,
  },
  {
    name: "Sunnyside Agency Landing Page",
    content:
      "React.js ve Tailwind.css becerilerimi geliştirmek için Frontend Mentor adlı sitede bulunan görevi gerçekleştirdim.Responsive tasarım uygulayarak mobil duyarlı hale getirdim.",
    projectCode: "https://github.com/ogzcode/FM-Sunnyside-agency-landing-page",
    live: "https://ogzcode.github.io/FM-Sunnyside-agency-landing-page/",
    hashtag: ["react", "ui/ux", "frontendmentor", "tailwind"],
    image: sunny,
  },
  {
    name: "React Note App",
    content:
      "React.js de state yönetimi için kullanılan yöntemlerden biri olan Context API yi basit bir not uyuglaması ile uyguladım.Projede notlarınızı tarayıcınıza kaydedebilmeniz için aynı zamanda localStorage API de kullandım.",
    projectCode: "https://github.com/ogzcode/React-Note-App",
    live: "https://react-note-app-three.vercel.app/",
    hashtag: ["react", "ui/ux", "context API", "localstorage", "pure css"],
    image: note,
  },
  {
    name: "React Quiz App",
    content:
      "React.js ve axios kütüphanesini kullanarak geliştirdiğim anonim bir API dan veri çekerek bunları kullanıcıya çoktan seçmeli soru şeklinde soran bir uygulama.",
    projectCode: "https://github.com/ogzcode/React-Quiz-App",
    live: "https://react-quiz-app-ogzcode.vercel.app/",
    hashtag: ["react", "ui/ux", "axios", "REST API", "pure css", "useEffect"],
    image: quiz,
  },
  {
    name: "The Odin Project Home Page Clone",
    content:
      "HTML, CSS, Javascript becerilerimi geliştirmek için The Odin Project adlı web sitesinin ana sayfasını kodladım.Pure Css kullarak mobil duyarlı hale getirmeye çalıştım.",
    projectCode: "https://github.com/ogzcode/Odin-Project-Home-Page-Clone",
    live: "https://odin-project-home-page-clone.vercel.app/",
    hashtag: ["HTML", "CSS", "Javascript", "ui/ux", "responsive design"],
    image: odin,
  },
  {
    name: "React Memory Game",
    content:
      "React.js kullanarak geliştirdiğim kart bulma oyunu.Bu projede temel react kavramlarını uygulamalı bir şekilde kullandım ve css grid yapısı ile stil verdim.",
    projectCode: "https://github.com/ogzcode/React-Memory-Game",
    live: "https://react-memory-game-xi.vercel.app/",
    hashtag: ["react", "pure css", "ui/ux", "game"],
    image: memory,
  }
];
