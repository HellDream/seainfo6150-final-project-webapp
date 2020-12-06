import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return <footer className={styles.container}>
        <a className={styles.content} href="/contact-us">Contact us?</a>
    </footer>
}

export default Footer;