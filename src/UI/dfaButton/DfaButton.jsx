import React from 'react';
import styles from "./DfaButton.module.scss";

export const DfaButton = (props) => {

    const { btnText, onClick } = props;

    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {btnText}
        </button>
    )
}
