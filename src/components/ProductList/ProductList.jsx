import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';
import electronicImg from '../../images/electronics.jpeg';
import booksImg  from '../../images/books.jpg';
import funituresImg from '../../images/furnitures.jpg';
import entertainImg from '../../images/entertainments.png';
import toolsImg from '../../images/tools.jpg';
import others from '../../images/others.jpg';
const products = [
    {
        slug: 0,
        title: 'Product 1',
        imageURI: booksImg,
    },
    {
        slug: 1,
        title: 'Product 2',
        imageURI: electronicImg,
    },
    {
        slug: 2,
        title: 'Product 3',
        imageURI: funituresImg,
    },

    {
        slug: 3,
        title: 'Product 4',
        imageURI: entertainImg,
    },
    {
        slug: 4,
        title: 'Product 5',
        imageURI: toolsImg,
    },

    {
        slug: 5,
        title: 'Product 6',
        imageURI: others,
    },
    {
        slug: 6,
        title: 'Product 7',
        imageURI: others,
    },
    {
        slug: 7,
        title: 'Product 8',
        imageURI: others,
    },
    {
        slug: 8,
        title: 'Product 9',
        imageURI: others,
    },
    {
        slug: 9,
        title: 'Product 10',
        imageURI: others,
    },
];
const ProductList = (props) => {
    return (
        <ul className={styles.productContainer}>
            {products.map((product) => (
                <ProductItem product={product} key={product.slug} category={props.categoryTitle}/>
            ))}
        </ul>
    );
};
export default ProductList;
