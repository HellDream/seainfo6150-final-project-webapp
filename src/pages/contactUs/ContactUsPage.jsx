import React, {useEffect} from 'react';
import styles from './ContactUsPage.module.css';
import Header from '../../components/headers/Header.jsx';
const ContactUsPage = (props) => {
    useEffect(()=>{
        document.title = "Thrift Store - Contact Us";

    });
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
                            <label  className={styles.label} htmlFor="message">Your Email:</label>
                            <input type="email" className={styles.input} required />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="message">
                                Your Message:
                            </label>
                            <textarea
                                className={styles.inputTextArea}
                                type="text"
                                id="message"
                                name="message"
                                required
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
