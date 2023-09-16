import React from 'react';
import styles from './styles.module.css';
import Competitors from "./competitors/Competitors";
import CompetitionButtons from "./competitionButtons/CompetitionButtons";

const CompetitionPage = () => {
    return (
        <div className={styles.root}>
            <Competitors />
            <CompetitionButtons />
        </div>
    );
};

export default CompetitionPage;