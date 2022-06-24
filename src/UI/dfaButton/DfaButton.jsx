import React from 'react';
import styles from "./DfaButton.module.scss";

export const DfaButton = (props) => {

    const { btnText } = props;

    return (
        <button
            className={styles.button}
        >
            {btnText}
        </button>
    )
}
