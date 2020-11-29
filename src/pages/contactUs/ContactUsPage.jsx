import React from 'react';
import styles from './ContactUsPage.module.css';
import Header from '../../components/headers/Header.jsx';
const ContactUsPage = (props) => {
    return (
        <>
            <Header
                createPage={true}
                onCancel={() => {
                    props.history.goBack();
                }}
            />
            <section className={styles.section}>
                <div className={styles.container}>
                    <h3 className={styles.formTitle}>
                        Tell Us What You Think!
                    </h3>
                    <form className={styles.form}>
                        <div className={styles.inputContainer}>
                            <label  className={styles.label} for="message">Your Email:</label>
                            <input type="email" className={styles.input} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} for="message">
                                Your Message:
                            </label>
                            <textarea
                                className={styles.inputTextArea}
                                type="text"
                                id="message"
                                name="message"
                            />
                        </div>
                        <button className={styles.submitButton} type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUsPage;
