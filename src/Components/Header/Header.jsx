import { useState } from 'react'
import Menu from '../Menu/Menu.jsx'
import Logo from '../Logo/Logo.jsx'
import styles from '../Header/header.module.scss'
import "./burger.scss"


function Header() {
	const [menuActive, setMenuActive] = useState(false)
	const items = [
		{id: "home_link", value: "Главная", href: "/home"},
		{id: "about_link", value: "О нас", href: "/about"},
		{id: "goods_link", value: "Наши товары", href: "/goods"},
		{id: "info_link", value: "Информация", href: "/info"},
		{id: "private_link", value: "Политика конфиденциальности", href: "/private"},
		{id: "contacts_link", value: "Контакты", href: "/contacts"},
	]
    return (
    <header className={styles.wrapper} id="home">
		<div className="burger">
			<nav>
				<div className="button" onClick={() => setMenuActive(!menuActive)}>
					<span></span>
				</div>
			</nav>
			<Menu 
				active={menuActive}
				setActive={setMenuActive}
				items={items}
			/>
		</div>
		<h1 className={styles.title}>
			Amili look shop
		</h1>
		<div className={styles.container}>
			<div className={styles.header}>
				<Logo/>
			</div>
		</div>
	</header>
    );
}

export default Header;


