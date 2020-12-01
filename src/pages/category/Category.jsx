import React, { useState, useEffect } from 'react';
import styles from './Category.module.css';
import Header from '../../components/headers/Header.jsx';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/footer/Footer';
import { isEmpty } from "lodash";
import ReactDOM from 'react-dom'


const CategoryPage = (props) => {
    const [products, setProducts] = useState();
    useEffect(() => {
        const category = props.categoryTitle;
        document.title = "Thrift Store - "+ category.charAt(0).toUpperCase() + category.slice(1);
        const fetchData = async () => {
            const res = await fetch(
                'https://us-central1-seainfo6150-final-project.cloudfunctions.net/api/getProducts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify({ category: category }),
                }
            );
            const json = await res.json();
            setProducts(json);
        };

        if(isEmpty(products)){
            fetchData();
        }
    }, [products, props.categoryTitle]);
    return ( isEmpty(products) ? <div></div>:
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
                    <ProductList
                        categoryTitle={props.categoryTitle}
                        products={products}
                    />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CategoryPage;
