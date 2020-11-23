import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <div>
        <header className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.empty}></div>
                    
                    <h3 className={styles.title}>thrift market</h3>

                <div className={styles.links}>
                    <Link className={styles.createLink} to="/create">
                        create
                    </Link>
                    <Link className={styles.homeLink} to="/">
                        home
                    </Link>
                </div>
            </div>
        </header>

        </div>
    )
}

export default Header;
