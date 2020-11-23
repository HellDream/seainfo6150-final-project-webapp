import React from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';
const ProductItem = (props) => {
    const description =
        'In marketing, a product is an object or system made available for consumer use; \
        it is anything that can be offered to a market to satisfy the desire or need of a customer';
    const timeStamp = '11-23-2020';
    return (
        <li className={styles.product} onClick={()=>{alert(11111)}}>
            <div className={styles.imageBlock}>
                <img
                    className={styles.image}
                    src={props.product.imageURI}
                    alt={`${props.title}`}
                />
            </div>
            <div className={styles.productInfoBlock}>
                <Link
                    to={`${props.category}/product/${props.product.slug}`}
                    className={styles.title}
                >
                    {props.product.title}
                </Link>
                <h4 className={styles.price}> $ 15.00</h4>
            </div>
            <time className={styles.time} dateTime={timeStamp}>
                {timeStamp}
              </time>
        </li>
    );
};

export default ProductItem;
