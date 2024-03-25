import { useState } from 'react'
import Menu from '../Menu/Menu.jsx'
import Logo from '../Logo/Logo.jsx'
import styles from '../Header/header.module.scss'


function Header() {
	const [menuActive, setMenuActive] = useState(false)
	const items = [
		{id: "home_link", value: "Главная", href: "/"},
		{id: "about_link", value: "О нас", href: "/about"},
		{id: "goods_link", value: "Все товары", href: "/allGoods"},
		{id: "info_link", value: "Информация", href: "/info"},
		{id: "private_link", value: "Политика конфиденциальности", href: "/privacyPolicy"}
	]
    return (
    <header className={styles.wrapper}>
		<div className={styles.burger}>
			<nav>
				<div className={styles.button} onClick={() => setMenuActive(!menuActive)}>
					<span></span>
				</div>
			</nav>
			<Menu 
				active={menuActive}
				setActive={setMenuActive}
				items={items}
			/>
		</div>
		<div className={styles.container}>
			<div className={styles.header}>
				<Logo/>
			</div>
		</div>
	</header>
    );
}

export default Header;


