import React from 'react';
import CategoryItem from '../categoryItem/CategoryItem';
import styles from './Category.module.css';
import electronicImg from '../../images/electronics.jpeg';
import booksImg  from '../../images/books.jpg';
import funituresImg from '../../images/furnitures.jpg';
import entertainImg from '../../images/entertainments.png';
import toolsImg from '../../images/tools.jpg';
import others from '../../images/others.jpg';
const categories = [
    {
        slug: 0,
        title: 'books',
        imageURI: booksImg,
    },
    {
        slug: 1,
        title: 'electronics',
        imageURI: electronicImg,
    },
    {
        slug: 2,
        title: 'furnitures',
        imageURI: funituresImg,
    },

    {
        slug: 3,
        title: 'entertainments',
        imageURI: entertainImg,
    },
    {
        slug: 4,
        title: 'tools',
        imageURI: toolsImg,
    },

    {
        slug: 5,
        title: 'others',
        imageURI: others,
    },
];
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
