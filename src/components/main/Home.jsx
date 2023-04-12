import bg from "../../image/home-bg.svg";

function Home() {
    return (
        <main id="home" className="relative h-screen flex justify-center items-center">
            <img src={bg} className="absolute w-full h-full -z-10" />
            <div className="w-2/3 text-center mt-16">
                <h1 className="text-5xl uppercase text-slate-800 font-bold mb-8">Merhaba, Ben Oğuzhan Güç</h1>
                <p className="text-lg text-slate-800 mb-16 tracking-wide">
                    Ben bir frontend geliştiriciyim ve web siteleri veya uygulamalar için 
                    kullanıcı dostu arayüzler oluşturmak için HTML, CSS ve JavaScript 
                    gibi teknolojileri kullanıyorum.
                </p>
                <a href="" className="bg-yellow-400 px-12 py-4 text-xl uppercase rounded-md text-white font-medium transition-colors shadow-lg hover:bg-yellow-500">Projeler</a>
            </div>
        </main>
    );
}

export default Home;