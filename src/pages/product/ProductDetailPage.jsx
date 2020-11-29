import React from 'react';
import styles from './ProductDetailPage.module.css';
import Header from '../../components/headers/Header.jsx';
import bookImg from '../../images/books.jpg';

const ProductPage = (props) => {
    return (
        <>
            <Header />
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.image}
                            src={bookImg}
                            alt="book"
                        />
                    </div>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>Old book</h3>
                        <h4 className={styles.price}>$15.00</h4>
                    </div>
                    <div className={styles.contactContainer}>
                        <address className={styles.contact}>
                            Posted by John Doe{' '}
                            <a href="mailto:kate.farley@nytimes.com">
                                kate.farley@nytimes.com
                            </a>
                        </address>
                        <time datetime="2018-11-22">November 22, 2018 </time>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p>
                            Made of copper and gold so that it would shine
                            bright, the first torch took a beating from the
                            weather and was replaced by a replica in 1984.
                            It&rsquo;s been stored in the statue&rsquo;s
                            pedestal ever since.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;
