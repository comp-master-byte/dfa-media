import React from 'react';
import styles from "./MyStructure.module.scss";
import { Card } from '../../components/Card/Card.jsx';
import { cards } from "../../data/cards.js";

export const MyStructure = () => {
    return (
        <div className={styles.structure}>
            <div className={styles.structure__title}>Моя структура</div>

            <div className={styles.cardList}>
                {cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </div>
        </div>
    )
}