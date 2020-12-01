import React from "react";
import styles from "./LoadingProgress.module.css";
const LoadingProgress = (props) => {
    return <div className={styles.container}>
        <div className={styles.loader}></div>
    </div>
}

export default LoadingProgress;