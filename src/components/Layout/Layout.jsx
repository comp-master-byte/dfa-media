import React from 'react';
import styles from "./Layout.module.scss";
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.jsx';

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Navigation />
            </div>
        </div>
    )
}
