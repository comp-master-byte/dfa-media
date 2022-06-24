import React, { useState } from "react";
import { DfaButton } from '../../UI/dfaButton/DfaButton.jsx';
import { DfaModal } from '../../UI/DfaModal/DfaModal.jsx';
import styles from "./Header.module.scss";

export const Header = () => {

    const [isVisible, setIsVisible] = useState(false);

    const visiblityOn = () => setIsVisible(true);
    const visiblityOff = () => setIsVisible(false);

    return (
        <header className={styles.header}>
            <DfaModal visible={isVisible} onClose={visiblityOff} />
            <DfaButton onClick={visiblityOn} btnText='Открыть' />
        </header>
    )
}
