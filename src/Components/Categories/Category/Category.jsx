import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Category.module.scss'
import { Link } from 'react-router-dom';
// import AllGoodsLink from '../../AllGoodsLink/AllGoodsLink.jsx';


export default function Category (props) {
    const {categoryId} = useParams()
    const [clickedCategory, setClickedCategory] = useState([]);
    useEffect(() => {
        if (!categoryId) return
        const handleCategory = () => {
            if (props.goods) {
                const filteredItems = props.goods.filter(item => item.categoryEng === categoryId);
                setClickedCategory(filteredItems);
            }
        };
        handleCategory();
    }, [categoryId]);
    return (
        <>
        <section className={styles.container}>
            <h2 className={styles.goodsTitle}>Наши товары</h2>
            <article className={styles.categories}>
                {clickedCategory?.length &&
                    clickedCategory.map((item) => (
                    <Link to={`/categories/${categoryId}/${item.id}`} key={item.id}>
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageWrapper} >
                            <img className={styles.image} src={item.image1} alt={item.name}/>
                            </div>
                            <p className={styles.name} id={item.id}>{item.name}</p>
                            <p className={styles.price}>{item.price} ₽</p>
                        </div>
                    </Link>
                    ))
                }
            </article>
            {/* <AllGoodsLink /> */}
        </section>  
        </>
    );
}