import React, { useEffect, useState } from 'react';
import styles from './ProductDetailPage.module.css';
import Header from '../../components/headers/Header.jsx';
import { isEmpty } from 'lodash';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import LoadingProgress from '../../components/progress/LoadingProgress';
import Error from '../../Error/Error';
const ProductPage = (props) => {
    dayjs.extend(relativeTime);

    const [product, setProduct] = useState();
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        document.title = 'Thrift Store - Product Detail';

        const fetchData = async () => {
            const res = await fetch(
                'http://localhost:5000/seainfo6150-final-project/us-central1/api/getProductById',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        category: props.categoryTitle,
                        slug: props.productId,
                    }),
                }
            );
            if (res.status === 200) {
                const json = await res.json();
                setProduct(json);
            } else {
                setHasError(true);
            }
        };

        if (isEmpty(product) && !hasError) {
            if (props.product) {
                setProduct(props.product);
            } else {
                fetchData();
            }
        }
    }, [product]);
    if (hasError) {
        return <Error />;
    }

    return isEmpty(product) ? (
        <LoadingProgress />
    ) : (
        <>
            <Header />
            <section className={styles.section}>
                <button
                    className={styles.backBtn}
                    onClick={() => {
                        props.history.goBack();
                    }}
                ></button>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src={product.imageUrl}
                            alt="book"
                        />
                    </div>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>{product.title}</h3>
                        <h4 className={styles.price}>
                            ${product.price.toFixed(2)}
                        </h4>
                    </div>
                    <div className={styles.contactContainer}>
                        <address className={styles.contact}>
                            Posted by {product.contactName + ' '}
                            <a href="mailto:kate.farley@nytimes.com">
                                {product.email}
                            </a>
                        </address>
                        <time dateTime={product.postedTime}>
                            {dayjs(product.postedTime).fromNow()}{' '}
                        </time>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p>{product.description}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;
