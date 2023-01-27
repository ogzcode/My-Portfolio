function NavBar() {
    return (
        <nav className='navbar'>
            <div className='menu'>
                <a href="#home" className='navbar__item'>Anasayfa</a>
                <a href="#portfolio" className='navbar__item'>Portfolio</a>
                <a href="#about" className='navbar__item'>Hakkında</a>
                <a href="#contact" className='navbar__item'>İletişim</a>
            </div>
        </nav>
    );
}

export default NavBar;