import "./About.css";

function AboutBox() {
    return (
        <div className='col-lg-6'>
            <h1 className='about__header text-center'>Hakkımda</h1>
            <div className='about__text--box'>
                <p className='about__text'>
                    Merhaba Ben Oğuzhan<br></br>
                    İnönü Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim.Kendimi Frontend alanında
                    geliştiriyorum.Son 1 yıldır ise React.js öğreniyorum ve aynı zamanda bir çok bireysel
                    proje de geliştirdim.React.js ile birlikte Bootstrap kütüphanesini de kullanıyorum.
                    Henüz sektör tecrübem yok ama çalışmak ve tecrübe edinmek için çok istekliyim. 
                    <br></br>
                    Aşağıda bulunan adreslerden bana ulaşabilirsiniz.
                </p>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <div className='col-lg-6'>
            <div className='skills'>
                <h1 className='skill__header'>Yeteneklerim</h1>
                <div className='skill__box'>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>Bootstrap</span>
                    <span>React.js</span>
                    <span>Vue.js</span>
                    <span>SASS</span>
                    <span>Python</span>
                    <span>Git</span>
                </div>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className='about' id="about">
            <div className='row'>
                <AboutBox />
                <Skills />
            </div>
        </div>

    );
}

export default About;