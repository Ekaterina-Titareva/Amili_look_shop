import React from 'react';
import styles from './category.module.scss'
import {goods} from '../../assets/data/data.js'
// import GoodItem from '../GoodItem/GoodItem.jsx'

function Category({id, name, image1, image2}) {
    const handleMouseOver = (e) => {
        e.target.src = image2;
};
const handleMouseOut = (e) => {
    e.target.src = image1;
};
const handleCategoryClick = (categoryName) => {
    const category = categoryName.target.alt;
    goods.map(item => { 
            if (item.category === category){
                console.log(item.id)
            } else return 
    })
}

    return (
        <>
            <div className={styles.card} key={id} onClick={handleCategoryClick}> 
                <div className={styles.imageWrapper}>
                    <img className={styles.image}
                    src={image1} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                    alt={name}
                    />
                </div>
                <p>{name}</p>
            </div>


            {/* <div>
                {
                    goods.map(item => { 
                        < GoodItem
                            key={item.id}
                            category={item.category}
                            name={item.name}
                            src1={item.image1}
                            src2={item.image2}
                            src3={item.image3} 
                        />
                        
                    })
                }
            </div> */}
            </>
        )
    }

export default Category;

