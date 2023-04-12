import bg from "../../image/home-bg.svg";

import day1 from "./img/day1.svg";
import day2 from "./img/day2.svg";
import day3 from "./img/day3.svg";
import day4 from "./img/day4.svg";
import day5 from "./img/day5.svg";
import day6 from "./img/day6.svg";
import day7 from "./img/day7.svg";
import day8 from "./img/day8.svg";
import day9 from "./img/day9.svg";

function Card({ count, img }) {
    return (
        <div className="w-[360px] h-[360px] relative shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
            <img src={img} className=""/>
            <p className="absolute bottom-0 left-0 w-full text-center text-xl text-slate-800 py-2 bg-white">Day {count}</p>
        </div>
    );
}

function Design() {
    const data = [day1, day2, day3, day4, day5, day6, day7, day8, day9];
    return (
        <div className="min-h-screen py-6">
            <div className="relative flex justify-center items-center h-[50vh]">
                <h1 className="about__text text-4xl text-slate-700 relative text-center">UI/UX Çalışmalarım</h1>
                <img src={bg} className="absolute top-0 left-0 w-full h-full -z-10" />
            </div>
            <div className="flex flex-wrap justify-center gap-12 py-16">
                {
                    data.map((d, i) => <Card count={i + 1} img={d} key={i} />)
                }
            </div>
        </div>
    );
}

export default Design;