import logoImg from '../../assets/icons/flower.svg'
import styles from '../Footer/footer.module.scss'

function Footer() {

    return (
    <footer className={styles.footer} id="contacts" >
        <div className={styles.logo}>
            <img src={logoImg} alt="logo" className={styles.logoImg} />
        </div>
        <div className={styles.info}>
        <ul className={styles.contacts}>
            <li className={styles.instagram}><a target="_blank">instagram</a>
            </li>
            <li className={styles.telegram}><a href="https://t.me/amili_lookshop" target="_blank">telegram</a></li>
            <li className={styles.whatsapp}><a href="https://wa.me/+79510686916" target="_blank">whatsapp</a></li>
            <li className={styles.phone}><a href="tel:+79510686916">+7 951 068 69 16</a></li>
        </ul>
        <nav>
            <ul className={styles.menu}>
                <li><a className={styles.link} href="#home">Главная</a></li>
                <li><a className={styles.link} href="#about">О нас</a></li>
                <li><a className={styles.link} href="#goods">Наши товары</a></li>
                <li><a className={styles.link} href="#info">Информация</a></li>
                <li><a className={styles.link} href="#private">Политика конфиденциальности</a></li>
            </ul>
        </nav>
        </div>
    </footer >
    );
}

export default Footer;