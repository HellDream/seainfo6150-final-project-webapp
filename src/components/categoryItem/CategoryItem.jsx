import React from 'react';
import styles from './CategoryItem.module.css';
import { Link } from 'react-router-dom';
const CategoryItem = (props) => {
    return (
        <li className={styles.category}>
            <div className={styles.imageBlock}>
                <img
                    className={styles.image}
                    src={props.category.imageURI}
                    alt={`${props.title}`}
                />
            </div>
            <Link to={props.category.title} className={styles.title}>
                {props.category.title}
            </Link>
        </li>
    );
};

export default CategoryItem;
