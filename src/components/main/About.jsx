function Skills() {
    const skills = [
        "HTML", "CSS", "Javascript", "React.js", "Bootstrap", "Tailwind", "Git",
        "Github", "SASS", "Python", "Flask Basics", "SEO", "Responsive Design",
        "Node.js/Exspress.js Basics", "SQLite", "Figma", "Penpot", "UI/UX"
    ];
    return (
        <div className="p-0 m-0">
            <h1 className="mb-4 text-2xl text-slate-700">Becerilerim</h1>
            <div className="flex flex-wrap self-center">
                {
                    skills.map((s, i) => <span key={i} className="bg-slate-500 py-2 px-8 mr-8 mb-6 rounded-md text-white">{s}</span>)
                }
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="bg-gray-50 lg:p-24 p-12 pb-0" id="about">
            <div className="text-center mb-24">
                <h1 className="about__text relative text-slate-700 text-4xl uppercase font-bold mb-8">Hakkımda</h1>
                <p className="lg:w-1/2 mx-auto text-lg text-slate-800 tracking-wide">
                    Burada, ne yaptığım ve çoğunlukla programlama ve teknoloji
                    açısından mevcut becerilerim hakkında daha fazla bilgi bulacaksınız.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 gap-x-16">
                <div className="mb-8">
                    <h1 className="mb-4 text-2xl text-slate-700">Kimim Ben!</h1>
                    <p className="text-lg text-slate-800 tracking-wide">
                        Web Sitelerinin ve Web Uygulamalarının Ön Uçunu oluşturan bir Ön Uç Web Geliştiricisiyim.
                        HTML, CSS ve JavaScript gibi temel frontend teknolojilerine hakimim ve bu konularda
                        yeterli deneyime kendi projelerimi geliştirerek sahip oldum.
                        Aynı zamanda popüler Ön Uç aracı olan React.js ve Tailwind.css gibi araçları kullanarak projeler
                        geliştirebiliyorum.<span className="font-bold">Projeler</span> bölümünde bazı çalışmalarıma göz atabilirsiniz.
                        <br></br>
                        <br></br>
                        Figma ve Penpot gibi tasarım araçlarını öğreniyorum.UI/UX konusunda kendimi geliştirmek 
                        için her gün yeni tasarımlar oluşturmaya özen gösteriyorum.<span className="font-bold">UI/UX </span>
                        bölümünde bazı tasarımlara göz atabilirsiniz.
                        <br></br>
                        <br></br>
                        Python ve Javascript tabanlı teknolojileri kullanmayı seviyorum.
                        Son zamanlarda Arka Uç alanında da kendimi geliştirmek amacıyla Flask ve Node.js öğreniyorum.
                        <br></br>
                        <br></br>
                        Katkıda bulunabileceğim, öğrenebileceğim ve kendimi geliştirebileceğim iş fırsatlarına,
                        yarı zamanlı işlere ve gönüllü staj yapmaya açığım.Henüz iş tecrübem yok ama çalışmak
                        ve öğrenmek konusunda çok istekliyim.
                        Becerilerime ve deneyimime uyan iyi bir fırsatınız varsa, benimle iletişime geçmekten çekinmeyin.
                    </p>
                </div>
                <Skills />
            </div>
        </div>
    );
}
export default About;