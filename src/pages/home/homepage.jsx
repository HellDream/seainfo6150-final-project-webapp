import React from 'react'
import CategoryList from '../../components/CategoryList/CategoryList.jsx';
import Header from "../../components/headers/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import styles from "./homepage.module.css";
const Home = () => {
    return (
        <>
        <Header />
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.block}></div>
                <div className={styles.headLineContainer}>
                    <h1 className={styles.headLine}>
                            Find what you need here...
                    </h1>
                    
                </div>
                <CategoryList />
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Home;