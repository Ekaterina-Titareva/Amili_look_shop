import React, {useState} from 'react';
import styles from './goodsOfCategory.module.scss'
import goods from '../../assets/data/data'

function GoodsOfCategory({id, onClick}) {
    const handleClick = () => {
        onClick(name);
    };
    return (
        <div key={id} onClick={handleClick}>
        <h3>{goods.name}</h3>
        <img src={goods.image1} />
    </div>)
    }

export default GoodsOfCategory;