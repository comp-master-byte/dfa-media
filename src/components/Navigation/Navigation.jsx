import React, { Fragment } from 'react';
import styles from "./Navigation.module.scss";
import { DfaLink } from '../../UI/DfaLink/DfaLink.jsx';
import structure from "../../images/icons/structure.svg";
import dashboard from "../../images/icons/homePage.svg";
import discuss from "../../images/icons/discuss.svg";
import shop from "../../images/icons/shop.svg";
import maraphon from "../../images/icons/marathon.svg";
import landing from "../../images/icons/landing.svg";
import activeStructure from "../../images/activeIcons/structure.svg";
import activeSdashboard from "../../images/activeIcons/homePage.svg";
import activeDiscuss from "../../images/activeIcons/discuss.svg";
import activeShop from "../../images/activeIcons/shop.svg";
import activeMaraphon from "../../images/activeIcons/marathon.svg";
import activeLanding from "../../images/activeIcons/landing.svg";
import { FiHeart } from "react-icons/fi"

export const Navigation = () => {

    return (
        <Fragment>
            <DfaLink
                to='/dashboard'
                textLink="Дашбоард"
                icon={dashboard}
                activeIcon={activeSdashboard}
            />
            <DfaLink
                to='/active'
                textLink="Биржа активности"
                icon={discuss}
                activeIcon={activeDiscuss}
            />
            <DfaLink
                to='/blogers'
                textLink="Биржа блогеров"
                icon={dashboard}
                activeIcon={activeSdashboard}
            />
            <DfaLink
                to='/pr'
                textLink="Взаимопиар"
                reactIcon={<FiHeart style={{ width: 28, height: 24 }} />}
            />
            <DfaLink
                to='/structure'
                textLink="Моя структура"
                icon={structure}
                activeIcon={activeStructure}
            />

            <DfaLink
                to='/shop'
                textLink="Магазин"
                icon={shop}
                activeIcon={activeShop}
            />
            <DfaLink
                to='/maraphon'
                textLink="Марафон"
                icon={maraphon}
                activeIcon={activeMaraphon}
            />
            <DfaLink
                to='/landings'
                textLink="Лендинги"
                icon={landing}
                activeIcon={activeLanding}
            />
        </Fragment>
    )
}
