import React from "react";
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
            <video className={styles.video} controls preload="auto">
                <source src="./assets/video/video.mp4" type="video/mp4" />
            </video>
        </div>
        <MakeupBag goods={props.goods}/>
        <Questions />
</>
    );
};

export default Home