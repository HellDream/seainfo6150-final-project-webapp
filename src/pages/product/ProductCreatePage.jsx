import React, { useState, useEffect } from 'react';
import styles from './ProductCreatePage.module.scss';
import Header from '../../components/headers/Header.jsx';
import Dialog from '../../components/dialog/Dialog';

const ProductCreatePage = (props) => {
    const [selectCategory, setSelectCategory] = useState();
    const [next, setNext] = useState(true);
    const [dialogState, setDialogState] = useState({
        open: false,
        message: '',
        ok: null,
        cancel: null,
        onClose: null,
    });

    const [data, setData] = useState({
        contactName: '',
        email: '',
        title: '',
        price: 0.00,
        description: '',
    });

    const [imgData, setImgData] = useState({
        image: null,
        imageUrl: null,
    });

    useEffect(() => {
        document.title = "Thrift Store - Create Product"
    });
    

    const onChangeCategory = (event) => {
        setSelectCategory(event.target.value);
        setData({ ...data, category: event.target.value.toLowerCase() });
    };
    const categoryFormPage = (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3 className={styles.formTitle}>Select A Category</h3>

                <form className={styles.form}>
                    <div className={styles.labelContainer}>
                        <input
                            type="radio"
                            id="Books"
                            name="Books"
                            value="Books"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Books'}
                            className={styles.radio}
                        />
                        <label className={styles.categoryLabel} htmlFor="Books">
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
                            id="Entertainments"
                            type="radio"
                            name="Entertainments"
                            value="Entertainments"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Entertainments'}
                            className={styles.radio}
                        />
                        <label
                            className={styles.categoryLabel}
                            htmlFor="Entertainments"
                        >
                            Entertainment
                        </label>
                    </div>
                    <div className={styles.labelContainer}>
                        <input
                            id="Others"
                            type="radio"
                            name="Others"
                            value="Others"
                            onChange={onChangeCategory}
                            checked={selectCategory === 'Others'}
                            className={styles.radio}
                        />
                        <label
                            className={styles.categoryLabel}
                            htmlFor="Others"
                        >
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

    const handleSubmit = (event) => {
        event.preventDefault();
        setDialogState({
            open: true,
            message: 'You have successfully posted your item! Go check it out!',
            ok: () => {
                props.history.goBack();
            },
            onClose: () => {
                setDialogState({ ...dialogState, open: false });
                props.history.goBack();
            },
        });
    };

    const handleChange = (event) => {
        const name = event.target.name;
        setData({...data, [name]:event.target.value});
        console.log(data);
    };

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setImgData({...imgData, [image]: image});
        const formData = new FormData();
        formData.append('image', image, image.name);
        // uploadImage(formData);
      };

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
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} htmlFor="contactName">
                            Contact Name
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="contactName"
                            name="contactName"
                            value={data.contactName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} htmlFor="email">
                            Your Email
                        </label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} htmlFor="title">
                            Item Title
                        </label>
                        <input
                            className={styles.input}
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} htmlFor="price">
                            Price
                        </label>
                        <input
                            className={styles.input}
                            type="number"
                            id="price"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label} htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className={styles.inputTextArea}
                            type="text"
                            id="description"
                            value={data.description}
                            onChange={handleChange}
                            name="description"
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <button className={styles.imgBtn} type="button">
                            Upload Image
                        </button>
                    </div>
                    <button
                        className={styles.submitButton}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
    return (
        <>
            <Dialog
                open={dialogState.open}
                message={dialogState.message}
                ok={dialogState.ok}
                onClose={dialogState.onClose}
            />
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
