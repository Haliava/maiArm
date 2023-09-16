import React from 'react';
import styles from './styles.module.css';
import OrgInfo from "../footer/OrgInfo/OrgInfo";
import Contacts from "./Contacts/Contacts";
import {contacts} from "../../../constants";

function Footer() {
    return (
        <div className={styles.root}>
            <div className={styles.mainContent}>
                <OrgInfo />
                <Contacts contacts={contacts} />
                <a className={styles.siteLink} href={'http://maisport.ru/'}>
                    www.maisport.ru
                </a>
            </div>
        </div>
    );
}

export default Footer;
