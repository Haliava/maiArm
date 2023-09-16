import React from 'react';
import styles from './styles.module.css';
import PhotoWithName from "./photoWithName/PhotoWithName";
import YourCompetitions from "./yourCompetitions/YourCompetitions";
import PersonalData from "./personalData/PersonalData";
import Achievements from "./achievements/Achievements";

export type commonProps = {
    className: any,
}

const PersonalPage = () => {
    const isLoggedIn = true;

    return (
        <div className={styles.root}>
            {isLoggedIn && (
                <div className={styles.content}>
                    <PhotoWithName className={styles.photoWithName} />
                    <PersonalData className={styles.personalData} />
                    <YourCompetitions className={styles.yourCompetitions} />
                    <Achievements className={styles.achievements} />
                </div>
            )}

            {!isLoggedIn && (
                <div className={styles.notLoggedIn}>
                    Личный кабинет недоступен - вы не вошли в аккаунт
                </div>
            )}
        </div>
    );
};

export default PersonalPage;