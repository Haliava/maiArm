import React from 'react';

import styles from './styles.module.css';
import CompetitionList from "./competitionList/CompetitionList";
import ArmIcon from "../../../icons/ArmIcon";
import {whatIsArm} from "../../../constants";
import MainBanner from "./mainBanner";
import Gallery from "./gallery/Gallery";

function IndexPage() {
    const competitions = ['МЕЖГАЛАКТИЧЕСКОЕ СОРЕВНОВАНИЕ ПО АРМРЕСТЛИНГУ']

    return (
        <>
            <MainBanner />
            <div className={styles.wrapper}>
                <div className={styles.mainSection}>
                    <div className={styles.armText}>
                        {whatIsArm}
                    </div>
                </div>
                <div className={styles.armIcon}>
                    <ArmIcon />
                </div>
            </div>
            <CompetitionList competitions={competitions} />
            <div className={styles.galleryText}>
                <div className={styles.galleryTextHeader}>
                    ГАЛЕРЕЯ
                </div>
                <div className={styles.galleryTextSecondary}>
                    ВЗГЛЯНИТЕ НА НАШИХ БОГАТЫРЕЙ
                </div>
            </div>
            <Gallery />
        </>
    );
}

export default IndexPage;
