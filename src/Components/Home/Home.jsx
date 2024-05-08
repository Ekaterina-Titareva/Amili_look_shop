import React from "react";
import styles from "./home.module.scss";
// import { onMounted, onUnmounted, useRoute } from 'vue';

const Home = () => {
    // const route = useRoute();

    // onMounted(() => {
    //   const handleScroll = () => {
    //     if (window.scrollY > 100) {
    //       route.push('/categories');
    //     }
    //   };
    //   window.addEventListener('scroll', handleScroll);
    //   onUnmounted(() => {
    //     window.removeEventListener('scroll', handleScroll);
    //   });
    // });

    return (
      <div>
        <article className={styles.wrapper}>
          <h1 className={styles.title}>Amili look shop</h1>
        </article>
      </div>
    );
};

export default Home