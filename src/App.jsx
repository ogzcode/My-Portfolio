import NavBar from "./components/NavBar";
import Tools from "./components/Tools";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import About from "./components/About";
import { Divider } from "./components/Divider";

export default function App() {
    return (
        <div className="min-h-screen bg-stone-100">
            <NavBar />
            <About />
            <Divider />
            <Tools />
            <Divider />
            <Timeline />
            <Divider />
            <Contact />
        </div>
    )
}