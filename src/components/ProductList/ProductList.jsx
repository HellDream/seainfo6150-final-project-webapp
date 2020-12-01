import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';

const ProductList = (props) => {
    const products = props.products;
    return (
        <ul className={styles.productContainer}>
            {products.map((product) => (
                <ProductItem  product={product} key={product.slug} category={props.categoryTitle}/>
            ))}
        </ul>
    );
};
export default ProductList;
