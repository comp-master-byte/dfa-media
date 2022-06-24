import React from 'react';
import styles from "./Navigation.module.scss";
import { useMatch } from "react-router-dom";
import { DfaLink } from '../../UI/DfaLink/DfaLink.jsx';
import structure from "../../images/icons/structure.svg";
import dashboard from "../../images/icons/homePage.svg";
import activeStructure from "../../images/activeIcons/structure.svg";
import activeSdashboard from "../../images/activeIcons/homePage.svg";

export const Navigation = () => {

    return (
        <div>
            <DfaLink
                to='/dashboard'
                textLink="Дашбоард"
                icon={dashboard}
                activeIcon={activeSdashboard}
            />
            <DfaLink
                to='/structure'
                textLink="Моя структура"
                icon={structure}
                activeIcon={activeStructure}
            />
        </div>
    )
}
