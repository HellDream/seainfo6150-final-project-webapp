import React from 'react'
import styles from './Error.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}> It seems like you are lost...</div>
                <div className={styles.text}>Don't worry, this may not mean anything.</div>

                <a className={styles.homeLink} to="/">Home</a>
            </div>
        </div>
    )
}

export default Error;
