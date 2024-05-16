import styles from './allGoods.module.scss'
import { Link } from 'react-router-dom';

function AllGoods(props) {
    
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>все товары</h2>
            <div className={styles.wrapper}>
                { !!props.goods?.length &&
                    props.goods.map((item) => (
                        
                        <Link to={`/allGoods/${item.id}`} key={item.id} >
                            <div key={item.id} className={styles.card}>
                                <div className={styles.imageWrapper} >
                                    <img className={styles.image}
                                        onMouseOver={props.handleMouseOver} 
                                        onMouseOut={props.handleMouseOut} 
                                        src={item.image1}
                                        alt={item.name}
                                    />
                                </div>
                                <p className={styles.name} id={item.id}>{item.name}</p>
                                <p className={styles.price}>{item.price} ₽</p>
                            </div>
                        </Link>
                        ))
                }
            </div>
        </section>
    );
}

export default AllGoods;

