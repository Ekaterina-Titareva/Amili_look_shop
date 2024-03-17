import React from 'react';
import styles from './goodItem.module.scss'

function GoodItem({key, category, name, src1, src2, src3}) {
    console.log(key)
    return (
        <>
        <p key={key} id={key}>{name}</p>
        <p>{category}</p>
        <img className={styles.image} src={src1} alt={name}/>
        <img className={styles.image} src={src2} alt={name}/>
        <img className={styles.image} src={src3} alt={name}/>
        </>
    );
}

export default GoodItem;
