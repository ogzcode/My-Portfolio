function Header(){
    return (
        <header className="bg-white fixed top-0 left-0 shadow w-full flex justify-between items-center py-6 px-10 z-10">
            <h1 className="text-slate-700 uppercase hover:text-yellow-400 text-2xl cursor-pointer font-bold transition-colors">Oğuzhan Güç</h1>
            <nav>
                <a className="mx-4 text-sm uppercase text-slate-700 hover:text-yellow-400 transition-colors" href="#home">Anasayfa</a>
                <a className="mx-4 text-sm uppercase text-slate-700 hover:text-yellow-400 transition-colors" href="#about">Hakkımda</a>
                <a className="mx-4 text-sm uppercase text-slate-700 hover:text-yellow-400 transition-colors" href="">Projeler</a>
                <a className="mx-4 text-sm uppercase text-slate-700 hover:text-yellow-400 transition-colors" href="">UI Tasarım</a>
                <a className="mx-4 text-sm uppercase text-slate-700 hover:text-yellow-400 transition-colors" href="#contact">İletişim</a>
            </nav>
        </header>
    );
}

export default Header;