import style from "./Header.module.css"


function Header(props) {
    return(
        <div className={style.tudo}>
            <div>
                <img className={style.logo} src="/logo.webp" />
            </div>
            <div></div>
            <div>
                <nav className={style.nav}>
                    <a href="#">Sobre Nós</a>
                    <a href="#">Mangás</a>
                    <a href="#">Contato</a>
                </nav>
            </div>

        </div>

    )
}

export default Header;