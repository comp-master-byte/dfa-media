import React from 'react';
import styles from "./Card.module.scss";
import avatar from "../../images/icons/avatarActive.png";

export const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardNumbers}>
                <div className={styles.cardNumber__level}>1</div>
                <div className={styles.cardNumber__partners}>133</div>
            </div>
            <div className={styles.border} />
            <div className={styles.cardInfo}>
                <div className={styles.cardInfo__level}>Уровень выплат</div>
                <div className={styles.cardInfo__partners}>Активных партнёров</div>
            </div>
            <div className={styles.avatarList}>
                <div className={styles.avatarItem}>
                    <div className={styles.avatarItem__img}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={styles.avatarItem__nickname}>kris_anfalova</div>
                </div>
            </div>
        </div>
    )
}
