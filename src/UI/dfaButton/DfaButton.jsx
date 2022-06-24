import React from 'react';
import styles from "./DfaButton.module.scss";

export const DfaButton = ({ btnText, ...props }) => {
    return (
        <button
            {...props}
        >
            {btnText}
        </button>
    )
}
