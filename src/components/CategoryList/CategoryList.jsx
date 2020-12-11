import React from 'react';
import CategoryItem from '../categoryItem/CategoryItem';
import styles from './Category.module.css';
import categories from "../../utils/categoryList";

const CategoryList = () => {
    return (
        <ul className={styles.categoryContainer}>
            {categories.map((category) => (
                <CategoryItem category={category} key={category.slug} />
            ))}
        </ul>
    );
};
export default CategoryList;
