import React from 'react';
import styles from './CategoryItem.module.css';
import { Link } from 'react-router-dom';
const CategoryItem = (props) => {
    return (
        <li className={styles.category}>
            <Link className={styles.link} to={props.category.title}>
                <div className={styles.imageBlock}>
                    <img
                        className={styles.image}
                        src={props.category.imageURI}
                        alt={`${props.title}`}
                    />
                </div>
                <h3 className={styles.title}>{props.category.title}</h3>
            </Link>
        </li>
    );
};

export default CategoryItem;
