import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = (props) => {
    return <footer className={styles.container}>
        <Link className={styles.content} to="/contact-us">Contact us?</Link>
    </footer>
}

export default Footer;