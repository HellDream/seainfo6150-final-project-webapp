import React from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const ProductItem = (props) => {
    dayjs.extend(relativeTime);
    return (
        <li className={styles.product}>
            <Link
                className={styles.link}
                to={{
                    pathname: `${props.category}/product/${props.product.slug}`,
                    product: props.product,
                }}
            >
                <div className={styles.imageBlock}>
                    <img
                        className={styles.image}
                        src={props.product.imageUrl}
                        alt={`${props.title}`}
                    />
                </div>
                <div className={styles.productInfoBlock}>
                    <h3 className={styles.title}>{props.product.title}</h3>
                    <h4 className={styles.price}>
                        ${props.product.price.toFixed(2)}
                    </h4>
                </div>
                <time
                    className={styles.time}
                    dateTime={props.product.postedTime}
                >
                    {dayjs(props.product.postedTime).fromNow()}
                </time>
            </Link>
        </li>
    );
};

export default ProductItem;
