import React from "react";
import styles from "./DfaInput.module.scss";

export const DfaInput = ({ ...props }) => {
    return (
        <input
            placeholder="Введите текст"
            className={styles.input}
            {...props}
        />
    )
}
