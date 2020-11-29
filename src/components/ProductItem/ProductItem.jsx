import React from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';
const ProductItem = (props) => {
    const description =
        'In marketing, a product is an object or system made available for consumer use; \
        it is anything that can be offered to a market to satisfy the desire or need of a customer';
    const timeStamp = '11-23-2020';
    return (
        <li className={styles.product}>
            <Link
                className={styles.link}
                to={`${props.category}/product/${props.product.slug}`}
            >
                <div className={styles.imageBlock}>
                    <img
                        className={styles.image}
                        src={props.product.imageURI}
                        alt={`${props.title}`}
                    />
                </div>
                <div className={styles.productInfoBlock}>
                    <h3 className={styles.title}>{props.product.title}</h3>
                    <h4 className={styles.price}> $ 15.00</h4>
                </div>
                <time className={styles.time} dateTime={timeStamp}>
                    {timeStamp}
                </time>
            </Link>
        </li>
    );
};

export default ProductItem;
