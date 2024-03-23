import React, { useState } from 'react';
import Categories from '../Categories/Categories.jsx';
import ItemsOfCategory from '../ItemsOfCategory/ItemsOfCategory.jsx';
import styles from '../Catalog/catalog.module.scss'
import {categories} from '../../assets/data/data.js'
import {goods} from '../../assets/data/data.js'


let clickedCategory = [];

function Catalog() {
	const [isClicked, setIsClicked] = useState(false);
	
	const handleCategoryClick = (e) => {
		setIsClicked((prev) => !prev);
		console.log(e.target.alt);
		const category = e.target.alt;
		const filteredItems = goods.filter(item => item.category == category);
		console.log(filteredItems);
		clickedCategory = filteredItems;
		console.log(clickedCategory);
	}
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image) => {
	setSelectedImage(image);
	}

	return (
    <section id="goods" className={styles.container}>
		<h2 className={styles.goodsTitle}>Наши товары</h2>
		
			{ isClicked ?
			<article className={styles.goods}>
				{
					clickedCategory?.length &&
						clickedCategory.map((item) => ( 
							<ItemsOfCategory
							key={item.id}
							id={item.id}
							category={item.category}
							name={item.name}
							image1={item.image1}
							image2={item.image2}
							image3={item.image3}
							description={item.description}
							color={item.color}
							size={item.size}
							price={item.price}
							material={item.material}
							selectedImage={selectedImage}
							handleImageClick={handleImageClick}
							/>
					))
				}
			</article> 
			:
			<article className={styles.categories}>
				{
				categories?.length &&
					categories.map((category) => ( 
						< Categories
							key={category.id}
							id={category.id} 
							name={category.name}
							image1={category.image1}
							image2={category.image2}
							handleCategoryClick={handleCategoryClick}
							/>
					))
				}
			</article>
			}
	</section>
	);
}

export default Catalog;