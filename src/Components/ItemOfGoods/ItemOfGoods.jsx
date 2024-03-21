import React from 'react';
import styles from './itemOfGoods.module.scss'

function ItemOfGoods({key, category, name, image1, image2, image3, description, color, size, price, material}) {
    return (
        <>
        <div className={styles.card}>
        <p key={key} id={key}>{name}</p>
        <img className={styles.image} src={image1} alt={name}/>
        <img className={styles.image} src={image2} alt={name}/>
        <img className={styles.image} src={image3} alt={name}/>
        <p>Цена: {price} рублей</p>
        <p>Размер: {size}</p>
        <p>Цвет: {color}</p>
        <p>Материал: {material}</p>
        <p>{description}</p>
        </div>
        </>
    );
}

export default ItemOfGoods;
