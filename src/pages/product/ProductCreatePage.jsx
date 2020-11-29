import React, { useState } from 'react';
import styles from './ProductCreatePage.module.scss';
import Header from '../../components/headers/Header.jsx';

const ProductCreatePage = (props) => {
    const [selectCategory, setSelectCategory] = useState();
    const [next, setNext] = useState(true);
    const onChangeCategory = (event) => {
        setSelectCategory(event.target.value);
    };
    const categoryFormPage = (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.formTitle}>Select A Category</h3>

                <form className={styles.form}>
                    <div className={styles.labelContainer}>
                        <input
                            type="radio"
                            id="Book"
                            name="Book"
                            value="Book"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Book'}
                            className={styles.radio}
                        />
                        <label className={styles.categoryLabel} htmlFor="Book">
                            Book
                        </label>
                    </div>
                    <div className={styles.labelContainer}>
                        <input
                            id="Electronics"
                            type="radio"
                            name="Electronics"
                            value="Electronics"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Electronics'}
                            className={styles.radio}
                        />
                        <label
                            className={styles.categoryLabel}
                            htmlFor="Electronics"
                        >
                            Electronics
                        </label>
                    </div>
                    <div className={styles.labelContainer}>
                        <input
                            id="Tools"
                            type="radio"
                            name="Tools"
                            value="Tools"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Tools'}
                            className={styles.radio}
                        />
                        <label className={styles.categoryLabel} htmlFor="Tools">
                            Tools
                        </label>
                    </div>
                    <div className={styles.labelContainer}>
                        <input
                            id="Furnitures"
                            type="radio"
                            name="Furnitures"
                            value="Furnitures"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Furnitures'}
                            className={styles.radio}
                        />
                        <label
                            className={styles.categoryLabel}
                            htmlFor="Furnitures"
                        >
                            Furnitures
                        </label>
                    </div>
                    <div className={styles.labelContainer}>
                        <input
                            id="Entertainment"
                            type="radio"
                            name="Entertainment"
                            value="Entertainment"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Entertainment'}
                            className={styles.radio}
                        />
                        <label
                            className={styles.categoryLabel}
                            htmlFor="Entertainment"
                        >
                            Entertainment
                        </label>
                    </div>
                    <div className={styles.labelContainer}>
                        <input
                            id="Other"
                            type="radio"
                            name="Other"
                            value="Other"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Other'}
                            className={styles.radio}
                        />
                        <label className={styles.categoryLabel} htmlFor="Other">
                            Other
                        </label>
                    </div>
                    <button
                        className={styles.submitButton}
                        onClick={(event) => {
                            event.preventDefault();
                            setNext(!next);
                        }}
                    >
                        Next
                    </button>
                </form>
            </div>
        </section>
    );

    const itemFormPage = (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.backBtnContainer}>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setNext(!next);
                        }}
                        className={styles.backBtn}
                    ></button>
                </div>
                <h3 className={styles.formTitle}>Submit Your Item</h3>
                <form className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} for="contactName">
                            Contact Name
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="contactName"
                            name="contactName"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} for="email">
                            Your Email
                        </label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} for="title">
                            Item Title
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="title"
                            name="title"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} for="price">
                            Price
                        </label>
                        <input
                            className={styles.input}
                            type="number"
                            id="price"
                            name="price"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} for="description">
                            Description
                        </label>
                        <textarea
                            className={styles.inputTextArea}
                            type="text"
                            id="description"
                            name="description"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <button className={styles.imgBtn} type="button">
                            Upload Image
                        </button>
                    </div>
                    <button className={styles.submitButton} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
    return (
        <>
            <Header
                createPage={true}
                onCancel={() => {
                    props.history.goBack();
                }}
            />
            {next === true ? categoryFormPage : itemFormPage}
        </>
    );
};

export default ProductCreatePage;
