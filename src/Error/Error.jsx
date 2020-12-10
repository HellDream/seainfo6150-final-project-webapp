import React from 'react'
import styles from './Error.module.css';
import { Link } from 'react-router-dom';
import img from "../images/panda.jpg"
const Error = () => {
    return (
        // <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={img} alt="Error" />
            </div>
            <div className={styles.title}> It seems like you are lost...</div>
            <div className={styles.text}>
                Don't worry, this may not mean anything.
            </div>

            <Link className={styles.homeLink} to="/">
                Home
            </Link>
        </div>
        // </div>
    );
}

export default Error;
