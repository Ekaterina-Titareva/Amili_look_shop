import styles from './about.module.scss'
import aboutImg from '../../assets/images/about.jpg'

function About() {

    return (
        <section id="about" className={styles.container}>
        <h2 className={styles.title}>о нас</h2>
        <div className={styles.media}>
            <img className={styles.image} src={aboutImg} alt="Гульназ" />
            <div>
                <p className={styles.text}>Гатауллина Гульназ - основательница магазина одежды Amili look shop.</p>
            </div>

            <video className={styles.video} controls preload="auto">
                <source src="./assets/video/video.mp4" type="video/mp4" />
            </video>
        </div>
        </section>
    );
}

export default About;