import styles from "./item.module.scss"
import { useState } from 'react';


const Item = (props) => {
    const [mainImage, setMainImage] = useState(props.image1);
    const handleClick = (image) => {
        setMainImage(image);
    };
    return (
        <div className={styles.cardWrapper}>
            <p className={styles.name}>{props.name}</p>
            <div className={styles.card}>
                <div className={styles.images}>
                    <div className={styles.imageMainWrapper}>
                        <img className={styles.imageMain} src={mainImage} alt={props.name} />
                    </div>
                    <div className={styles.imagesWrapper}>
                        <div className={styles.imageWrapper} onClick={() => handleClick(props.image1)}>
                            <img className={mainImage === props.image1 ? styles.imageMain : styles.image} src={props.image1} alt={props.name} />
                        </div>
                        <div className={styles.imageWrapper} onClick={() => handleClick(props.image2)}>
                            <img className={mainImage === props.image2 ? styles.imageMain : styles.image} src={props.image2} alt={props.name} />
                        </div>
                        <div className={styles.imageWrapper} onClick={() => handleClick(props.image3)}>
                            <img className={mainImage === props.image3 ? styles.imageMain : styles.image} src={props.image3} alt={props.name} />
                        </div>
                    </div>
                </div>
                <div className={styles.infoWrapper}>
                    <p className={styles.price}>Цена: {props.price} рублей</p>
                    <p className={styles.size}><span>Размер: </span><span className={styles.sizeBox}>{props.size}</span></p>
                    <p className={styles.color}>Цвет: {props.color}</p>
                    <p className={styles.material}>Материал: {props.material}</p>
                    <a className={styles.link} 
                        href={"https://wa.me/79510686916?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7.%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20"} 
                        target="_blank">
                        заказать
                    </a>
                    {Array.isArray(props.description) 
                    ? props.description.map((item, index) => (<p key={index} className={styles.description}>{item}</p>)) 
                    : <p className={styles.description}>{props.description}</p>}
                    <p className={styles.text1}>{props.text1}</p>
                    <p className={styles.text2}>{props.text2}</p>
                </div>
            </div>
        </div>
    )
}

export default Item


