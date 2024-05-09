import styles from "../MakeupBag/makeupBag.module.scss";
const MakeupBag = (props) => {

    return (
            <section className={styles.wrapper}>
            <h3>Косметичка для косметики, дорожных принадлежностей, аксессуаров для волос, канцелярии</h3>
            <div className={styles.images}>
                    <div  className={styles.imagesWrapper}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={props.goods[24].image2} alt={props.goods[24].name}/>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={props.goods[24].image3} alt={props.goods[24].name}/>
                        </div>
                    </div>
                    <div className={styles.imageMainWrapper}>
                        <img className={styles.imageMain} src={props.goods[24].image1} alt={props.goods[24].name}/>
                    </div>
                </div>
            <a className={styles.link} href="https://www.ozon.ru/product/kosmetichka-dlya-kosmetiki-dorozhnyh-prinadlezhnostey-aksessuarov-dlya-volos-kantselyarii-1017297275/" target="_blank">Купить на OZON</a>
            </section>
);
    };
    
    export default MakeupBag