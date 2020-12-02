import React, { useState, useEffect } from 'react';
import styles from './Category.module.css';
import Header from '../../components/headers/Header.jsx';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/footer/Footer';
import { isEmpty } from 'lodash';
import LoadingProgress from '../../components/progress/LoadingProgress';
import Error from '../../Error/Error';

const CategoryPage = (props) => {
    const [products, setProducts] = useState();
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        const category = props.categoryTitle;
        document.title =
            'Thrift Store - ' +
            category.charAt(0).toUpperCase() +
            category.slice(1);
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
            if (res.status !== 200) {
                setHasError(true);
            } else {
                const json = await res.json();
                setProducts(json);
            }
        };

        if (isEmpty(products) && !hasError) {
            fetchData();
        }
    }, [products, hasError, props.categoryTitle]);

    if (hasError) {
        return <Error />;
    }

    return isEmpty(products) ? (
        <LoadingProgress />
    ) : (
        <>
            <Header
                back={() => {
                    props.history.goBack();
                }}
            />
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
