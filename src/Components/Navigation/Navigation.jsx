import styles from '../Navigation/navigation.module.scss'

function Navigation() {

    return (
	<nav className={styles.nav}>
		<ul className={styles.navItems}>
			<li><a className={styles.navItem} href="#home">Главная</a></li>
			<li><a className={styles.navItem} href="#about">О нас</a></li>
			<li><a className={styles.navItem} href="#goods">Наши товары</a></li>
			<li><a className={styles.navItem} href="#info">Информация</a></li>
			<li><a className={styles.navItem} href="#private">Политика конфиденциальности</a></li>
			<li><a className={styles.navItem} href="#contacts">Контакты</a></li>
		</ul>
	</nav>
    );
}

export default Navigation;