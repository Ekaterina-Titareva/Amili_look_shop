import styles from "./categories.module.scss";
import { Link } from "react-router-dom";

export default function Categories(props) {
return (
  <>
  <section id="categories" className={styles.container}>
  <h2 className={styles.goodsTitle}>Наши товары</h2>
    <article className={styles.categories}>
      {props.categories?.length &&
      props.categories.map((category) => ( 
          <Link to={`/categories/${category.id}`} key={category.id} title={category.id}>
            <div className={styles.card}> 
                <div className={styles.imageWrapper}>
                <img className={styles.image}
                    src={category.image1} 
                    onMouseOver={props.handleMouseOver} 
                    onMouseOut={props.handleMouseOut}
                    alt={category.name}
                    />
                    </div>
                    <div className={styles.nameWrapper}>
                        <p className={styles.name}>{category.name}</p>
                    </div>
            </div>
            </Link>
        ))
      }
    </article>
</section>
</>
);
}

