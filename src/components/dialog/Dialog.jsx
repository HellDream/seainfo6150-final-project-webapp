import React from 'react';
import styles from './Dialog.module.css';

const Dialog = (props) => {
    const message = props.message;
    const open = props.open;
    const onOk = props.ok;
    let dialog = (
        <div className={styles.container}>
            <div className={styles.dialogWrapper}>
                <button className={styles.closeBtn} onClick={()=>props.onClose(!open)}> </button>
                <h3 className={styles.content}>{message}</h3>
                {onOk && <button className={styles.okBtn} onClick={onOk}>OK</button>}
            </div>
        </div>
    );
    if (!open) {
        dialog = null;
    }
    return open ? dialog:<div></div>;
};

export default Dialog;
