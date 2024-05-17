import Navigation from "../Navigation/Navigation"
import styles from '../Footer/footer.module.scss'
import Logo from '../Logo/Logo.jsx'
import { navLinks } from '../../../public/assets/data/data.js'

function Footer() {
    return (
    <footer className={styles.footer} id="contacts" >
        < Logo />
        <div>
            <nav>
                < Navigation 
                    navLinks={navLinks}
                />
            </nav>
            <div className={styles.info}>
                <div className={styles.contacts}>
                    <p>Контакты</p>
                    <a href="tel:+79510686916">+7 951 068 69 16</a>
                    <a href="mailto:Gulnazic01@mail.ru">Gulnazic01@mail.ru</a>
                </div>
                <div >
                    <a className={styles.whatsapp} href="https://wa.me/+79510686916" target="_blank"></a>
                    <a className={styles.telegram} href="https://t.me/amili_lookshop" target="_blank"></a>
                    <a className={styles.instagram} href="https://www.instagram.com/amili_lookshop" target="_blank"></a>
                </div>
            </div>
        </div>
    </footer >
    );
}

export default Footer;