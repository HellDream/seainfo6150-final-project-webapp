import React, {useEffect, useState} from 'react';
import styles from './ContactUsPage.module.css';
import Header from '../../components/headers/Header.jsx';
import Dialog from '../../components/dialog/Dialog';

const ContactUsPage = (props) => {
    const [dialogState, setDialogState] = useState({
        open: false,
        message: '',
        ok: null,
        cancel: null,
        onClose: null,
    });
    useEffect(()=>{
        document.title = "Thrift Store - Contact Us";

    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        setDialogState({
            open: true,
            message: 'You have uploaded your item successfully!',
            ok: () => {
                setDialogState({ ...dialogState, open: false });
                props.history.goBack();
            },
            onClose: () => {
                setDialogState({ ...dialogState, open: false });
            },
        });  
    }
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
            <section className={styles.section}>
                <div className={styles.container}>
                    <h3 className={styles.formTitle}>
                        Tell Us What You Think!
                    </h3>
                    <form className={styles.form} onSubmit={handleSubmit}>
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
