import React, { useState } from 'react';
import styles from './allGoods.module.scss'
import {goods} from '../../assets/data/data.js'
import ItemsOfCategory from "../ItemsOfCategory/ItemsOfCategory.jsx"
import ItemOfGoogs from '../ItemOfGoods/ItemOfGoods.jsx';
let clickedItem = [];

function AllGoods() {
    const [selectedImage, setSelectedImage] = useState(null);
	const handleImageClick = (image) => {
	setSelectedImage(image);
	}
	const [isItemClicked, setIsItemClicked] = useState(false);
	const handleItemClick = (e) => {
		setIsItemClicked((prev) => !prev);
		console.log(e.target.alt);
		const itemName = e.target.alt;
		const filteredItem = goods.filter(item => item.name == itemName);
		console.log(filteredItem);
		clickedItem = filteredItem;
		console.log(clickedItem);
	}
    return (
        <section id="allGoods" className={styles.container}>
            <h2 className={styles.title}>все товары</h2>
            <div className={styles.wrapper}>
                            { isItemClicked ? 
                                <>
                                    {clickedItem?.length &&
                                        clickedItem.map((item) => ( 
                                            <ItemOfGoogs 
                                                key={item.id}
                                                id={item.id}
                                                category={item.category}
                                                name={item.name}
                                                image1={item.image1}
                                                image2={item.image2}
                                                image3={item.image3}
                                                description={item.description}
                                                text1={item.text1}
                                                text2={item.text2}
                                                color={item.color}
                                                size={item.size}
                                                price={item.price}
                                                material={item.material}
                                                selectedImage={selectedImage}
                                                handleImageClick={handleImageClick}
                                            />
                                        ))
                                    }
                                </>
                                :

                goods.map((item) => (
                    <ItemsOfCategory key={item.id} id={item.id} name={item.name} image1={item.image1} image2={item.image2} price={item.price} handleItemClick={handleItemClick}/>
                ))
            }
            </div>
        </section>
    );
}

export default AllGoods;

