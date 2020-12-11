import React, {useEffect, useState} from 'react';
import styles from './ContactUsPage.module.css';
import Header from '../../components/headers/Header.jsx';
import Dialog from '../../components/dialog/Dialog';
import LoadingProgress from '../../components/progress/LoadingProgress';

const ContactUsPage = (props) => {
    const [dialogState, setDialogState] = useState({
        open: false,
        message: '',
        ok: null,
        cancel: null,
        onClose: null,
    });
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({email:'', message:''});
    useEffect(()=>{
        document.title = "Thrift Store - Contact Us";
    });

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setLoading(true);
        const res = await fetch('https://us-central1-seainfo6150-final-project.cloudfunctions.net/api/contactUs',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data)
        });
        setLoading(false);
        if(res.status!==201){
            setDialogState({
                open: true,
                message: 'Something went wrong with the process...',
                ok: () => {
                    setDialogState({ ...dialogState, open: false });
                },
                onClose: () => {
                    setDialogState({ ...dialogState, open: false });
                },
            });
        }else {
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
    }

    const handleChange = (event)=>{
        setData({...data, [event.target.name]:event.target.value});
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
            {loading  && <LoadingProgress />}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h3 className={styles.formTitle}>
                        Tell Us What You Think!
                    </h3>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <label  className={styles.label} htmlFor="message">Your Email:</label>
                            <input name="email" type="email" className={styles.input} required onChange={handleChange} />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="message">
                                Your Message:
                            </label>
                            <textarea
                                className={styles.inputTextArea}
                                id="message"
                                name="message"
                                required
                                onChange={handleChange}
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
