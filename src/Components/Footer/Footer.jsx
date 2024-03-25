import styles from '../Footer/footer.module.scss'
import Logo from '../Logo/Logo.jsx'

function Footer() {
    return (
    <footer className={styles.footer} id="contacts" >
        < Logo />
        <nav>
            <ul className={styles.menu}>
                <li><a className={styles.link} href="/">Главная</a></li>
                <li><a className={styles.link} href="/about">О нас</a></li>
                <li><a className={styles.link} href="/allGoods">Все товары</a></li>
                <li><a className={styles.link} href="/info">Информация</a></li>
                <li><a className={styles.link} href="/privacyPolicy">Политика конфиденциальности</a></li>
            </ul>
        </nav>
        <div className={styles.info}>
                <ul className={styles.contacts}>
            <li className={styles.whatsapp}><a href="https://wa.me/+79510686916" target="_blank">whatsapp</a></li>
            <li className={styles.phone}><a href="tel:+79510686916">+7 951 068 69 16</a></li>
        </ul>
        <ul className={styles.contacts}>
            <li className={styles.telegram}><a href="https://t.me/amili_lookshop" target="_blank">telegram</a></li>
            <li className={styles.instagram}><a target="_blank">instagram*</a> <span className={styles.instagramBan}>*запрещен в РФ</span></li>
        </ul>
        </div>
    </footer >
    );
}

export default Footer;