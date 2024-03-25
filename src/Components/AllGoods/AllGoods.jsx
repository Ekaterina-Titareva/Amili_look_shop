import React, { useState } from 'react';
import styles from './allGoods.module.scss'
import {goods} from '../../assets/data/data.js'
import ItemsOfCategory from "../ItemsOfCategory/ItemsOfCategory.jsx"

function AllGoods() {
// handleItemClick
    return (
        <section id="allGoods" className={styles.container}>
            <h2 className={styles.title}>все товары</h2>
            <div className={styles.wrapper}>
            {
                goods.map((item) => (
                    <ItemsOfCategory key={item.id} id={item.id} name={item.name} image1={item.image1} image2={item.image2} price={item.price}/>
                ))
            }
            </div>
        </section>
    );
}

export default AllGoods;

