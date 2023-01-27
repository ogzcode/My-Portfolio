import avatar from "../img/avataaars.svg";
import "./Home.css";

function Home() {
    return (
        <div className='home' id="home">
            <div className='home__inner'>
                <img src={avatar} alt="avatar" style={{ width: 280, height: 280 }} />
                <h1>Oğuzhan Güç</h1>
                <div className='divider'></div>
                <p>Junior Frontend Developer</p>
            </div>
        </div>
    );
}

export default Home;