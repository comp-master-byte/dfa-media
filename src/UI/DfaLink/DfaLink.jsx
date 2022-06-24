import React from 'react';
import styles from "./DfaLink.module.scss";
import { Link, useMatch } from "react-router-dom";

export const DfaLink = (props) => {

    const { to, textLink, icon, activeIcon } = props;

    const match = useMatch(to)

    return (
        <Link
            to={to}
            className={
                match
                    ? `${styles.activeLink} ${styles.link}`
                    : styles.link}
        >
            <div className={styles.link__icon}>
                {
                    match
                        ? <img src={activeIcon} alt="Моя структура" />
                        : <img src={icon} alt="Моя структура" />
                }
            </div>
            <div className={styles.link__text}>{textLink}</div>
        </Link>
    )
}
