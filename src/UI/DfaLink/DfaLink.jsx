import React from "react";
import styles from "./DfaLink.module.scss";
import { Link, useMatch } from "react-router-dom";

export const DfaLink = (props) => {

    const { to, textLink, icon, activeIcon, reactIcon } = props;

    const match = useMatch(to)

    return (
        <Link
            to={to}
            className={
                match
                    ? `${styles.activeLink} ${styles.link}`
                    : styles.link}
        >
            <span className={styles.highlight}></span>
            <div className={styles.link__icon}>
                {match ? <img src={activeIcon} alt="" /> : <img src={icon} alt="" />}
            </div>
            <div className={styles.link__text}>{textLink}</div>
        </Link>
    )
}
