import React from 'react';
import styles from './category.module.scss'


function Category({id, name, image1, image2, handleCategoryClick}) {
    const handleMouseOver = (e) => {
        e.target.src = image2;
};
const handleMouseOut = (e) => {
    e.target.src = image1;
};


    return (
        <>
        <div className={styles.card} key={id} onClick={handleCategoryClick}> 
            <div className={styles.imageWrapper}>
                <img className={styles.image}
                src={image1} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                alt={name}
                />
                <p>{name}</p>
            </div>
        </div>
            </>
        )
    }

export default Category;

