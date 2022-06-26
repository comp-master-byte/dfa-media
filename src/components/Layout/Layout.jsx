import React, { useState } from "react";
import styles from "./Layout.module.scss";
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Header } from '../Header/Header';

export const Layout = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleHandler = () => setIsOpenMenu(prev => !prev);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerBlock}>
                        <Header />
                    </div>
                    <div className={styles.burger} onClick={toggleHandler}>
                        <div className={styles.burder__lines}></div>
                        <div className={styles.burder__lines}></div>
                        <div className={styles.burder__lines}></div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.navigationContent}>
                        <Navigation isOpenMenu={isOpenMenu} />
                    </div>
                    <div className={styles.outletContent}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
