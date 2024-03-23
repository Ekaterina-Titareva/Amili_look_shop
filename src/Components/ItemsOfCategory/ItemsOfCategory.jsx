import React from 'react';
import styles from './itemsOfCategory.module.scss'
import {goods} from '../../assets/data/data.js'
let clickedItem = [];
function ItemsOfCategory({id, category, name, image1, image2, image3, description, color, size, price, material, selectedImage, handleImageClick}) {
	const [isItemClicked, setIsItemClicked] = useState(false);

	const handleItemClick = (e) => {
		setIsItemClicked((prev) => !prev);
		console.log(e.target.id);
		const idItem = e.target.id;
		const filteredItems = goods.filter(item => item.id == idItem);
		console.log(filteredItems);
		clickedItem = filteredItems;
		console.log(clickedItem);
	}

    const handleMouseOver = (e) => {
        e.target.src = image2;
};
    const handleMouseOut = (e) => {
        e.target.src = image1;
};
    return (
        <>
            { isItemClicked ? 
                <>
                <ItemsOfGoogs />
                </> 
            :
                <>
                <div key={id} className={styles.card}>
                <div className={styles.imageWrapper} >
                    <img className={styles.image} src={image1} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt={name}/>
                </div>
                <p className={styles.name} id={id}>{name}</p>
                <p className={styles.price}>{price} ₽</p>
                </div>
                </>
            }
        </>
    );
}

export default ItemsOfCategory;