import styles from './logo.module.scss'
import logoImg from '/flower.svg'

function Logo() {
    return (
    <a className={styles.logo} href="/">
        <img src={logoImg} alt="logo" className={styles.logoImg} />
        <div className={styles.logoInfo}>
            <p className={styles.logoTitle}>Amili look shop</p>
            <p className={styles.logoTitleText}>одежда для женщин</p>
        </div>
    </a>
    )
}
export default Logo;