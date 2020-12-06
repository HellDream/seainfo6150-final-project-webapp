import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Dialog from '../dialog/Dialog.jsx';
const Header = (props) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [message, setMessage] = useState('');

    const onCancel = (event) => {
        setMessage("You haven't finished yet. Are you sure to cancel?");
        setOpenDialog(!openDialog);
    };

    const backBtn = props.back ? (
        <button className={styles.backBtn} onClick={props.back}></button>
    ) : (
        <div className={styles.empty}></div>
    );

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={setOpenDialog}
                message={message}
                ok={props.onCancel}
            />

            <header className={styles.header}>
                <div className={styles.navbar}>
                    {backBtn}
                    <Link className={styles.homeLink} to="/">
                        <h3 className={styles.title}>thrift store</h3>
                    </Link>
                    <div className={styles.links}>
                        {!props.createPage && (
                            <Link className={styles.createLink} to="/create">
                                create
                            </Link>
                        )}

                        {props.createPage && (
                            <button
                                className={styles.cancel}
                                onClick={onCancel}
                            >
                                cancel
                            </button>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
