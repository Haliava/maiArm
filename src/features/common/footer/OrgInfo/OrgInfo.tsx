import React from "react";

import styles from './styles.module.css';
import MarkerIcon from "../../../../icons/MarkerIcon";

export default function OrgInfo() {
    return (
        <div className={styles.MAIsportInfo}>
            <div className={styles.orgTitle}>
                MAIsport.ru
            </div>
            <div className={styles.orgAbout}>
                Сайт, объединивший всю спортивную деятельность московского авиационного института
            </div>
            <div className={styles.orgGeo}>
                <MarkerIcon/>
                <div>
                    Москва, Россия
                </div>
            </div>
        </div>
    );
};
