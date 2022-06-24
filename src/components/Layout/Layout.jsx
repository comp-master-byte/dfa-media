import React from 'react';
import styles from "./Layout.module.scss";
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Header } from '../Header/Header';

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Header />
            </div>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.navigationContent}>
                        <Navigation />
                    </div>
                    <div className={styles.outletContent}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
