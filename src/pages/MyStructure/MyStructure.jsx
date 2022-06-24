import React from 'react';
import styles from "./MyStructure.module.scss";
import { Card } from '../../components/Card/Card.jsx';

export const MyStructure = () => {
    return (
        <div className={styles.structure}>
            <div className={styles.structure__title}>Моя структура</div>
            <Card />
        </div>
    )
}