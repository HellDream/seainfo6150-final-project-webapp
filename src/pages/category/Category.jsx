import React from 'react';
import styles from './Category.module.css';
import Header from '../../components/headers/Header.jsx';
import ProductList from '../../components/ProductList/ProductList';
const CategoryPage = (props) => {
    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.block}></div>
                    <div className={styles.headLineContainer}>
                        <h1 className={styles.headLine}>
                            {props.categoryTitle}
                        </h1>
                    </div>
                    <ProductList categoryTitle={props.categoryTitle} />
                </div>
            </section>
        </>
    );
};

export default CategoryPage;
