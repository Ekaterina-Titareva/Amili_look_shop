import { useState } from 'react';
import Categories from '../Categories/Categories.jsx';
import ItemsOfCategory from '../ItemsOfCategory/ItemsOfCategory.jsx';
import ItemOfGoogs from '../ItemOfGoods/ItemOfGoods.jsx';
import styles from '../Catalog/catalog.module.scss'
import {categories} from '../../assets/data/data.js'
import {goods} from '../../assets/data/data.js'


let clickedCategory = [];
let clickedItem = [];

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
		<>
	<article className={styles.wrapper}>
		<h1 className={styles.title}>
			Amili look shop
		</h1>
	</article>
    <section id="goods" className={styles.container}>
		<h2 className={styles.goodsTitle}>Наши товары</h2>
		{ isClicked ?
			<> 
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
					<article className={styles.goods}>
						{
							clickedCategory?.length &&
								clickedCategory.map((item) => ( 
									<ItemsOfCategory
									key={item.id}
									id={item.id}
									name={item.name}
									image1={item.image1}
									image2={item.image2}
									price={item.price}
									handleItemClick={handleItemClick}
									/>
							))
						}
					</article> 
				}
			</>
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
		<a className={styles.allGoodsLink}href="/allGoods">Посмотреть все товары</a>
	</section>
	</>
	);
}

export default Catalog;