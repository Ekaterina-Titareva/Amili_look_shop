import React, { useState } from 'react';
import styles from './itemsOfCategory.module.scss'

function ItemsOfGoogs({id, category, name, image1, image2, image3, description, color, size, price, material, selectedImage, handleImageClick}) {


    
    return (
        <>
            <div key={id} className={styles.card}>
            <p id={id}>{name}</p>
            <img className={selectedImage === image1 ? `${styles.image} ${styles.selected}` : styles.image} src={image1} alt={name} onClick={() => handleImageClick(image1)} />
            <img className={selectedImage === image2 ? `${styles.image} ${styles.selected}` : styles.image} src={image2} alt={name} onClick={() => handleImageClick(image2)} />
            <img className={selectedImage === image3 ? `${styles.image} ${styles.selected}` : styles.image} src={image3} alt={name} onClick={() => handleImageClick(image3)} />
            <p>Цена: {price} рублей</p>
            <p>Размер: {size}</p>
            <p>Цвет: {color}</p>
            <p>Материал: {material}</p>
            <p>{description}</p>
            </div>
        </>
    );
}

export default ItemsOfGoogs;
