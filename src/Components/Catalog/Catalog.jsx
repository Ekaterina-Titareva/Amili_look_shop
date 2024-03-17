import React from 'react'
import Category from '../Category/Category.jsx';
import styles from '../Catalog/catalog.module.scss'
import {categories} from '../../assets/data/data.js'

function Catalog() {

	return (
    <section id="goods" className={styles.container}>
		<h2 className={styles.goodsTitle}>Наши товары</h2>
		<article className={styles.goodsItems}>
		
		
			{categories?.length &&
				categories.map((category) => (
					< Category 
						key={category.id}
						name={category.name}
						image1={category.image1}
						image2={category.image2}
					/>
				))
			}
		
		</article>
	</section>
	);
}

export default Catalog;