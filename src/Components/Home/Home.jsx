import styles from "./home.module.scss";
import Categories from "../Categories/Categories.jsx";
import Questions from "../Questions/Questions.jsx";
import MakeupBag from "../MakeupBag/MakeupBag.jsx";

const Home = (props) => {

    return (
    <>
        <div>
        <article className={styles.wrapper}>
            <h1 className={styles.title}>Amili look shop</h1>
        </article>
        </div>
        <Categories goods={props.goods} categories={props.categories} handleMouseOver={props.handleMouseOver} handleMouseOut={props.handleMouseOut}/>
        <div className={styles.videoWrapper} >
            <iframe className={styles.video} src="https://www.youtube.com/embed/BTutPTsVM6U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <MakeupBag goods={props.goods}/>
        <Questions />
</>
    );
};

export default Home