import React, { useState } from 'react';
import { DfaModal } from '../../UI/DfaModal/DfaModal';
import styles from "./Header.module.scss";

export const Header = () => {

    const [isVisible, setIsVisible] = useState(false);

    const visiblityOn = () => setIsVisible(true);
    const visiblityOff = () => setIsVisible(false);

    return (
        <header className={styles.header}>
            <DfaModal visible={isVisible} onClose={visiblityOff} />
            <button onClick={visiblityOn}>Открыть</button>
        </header>
    )
}
