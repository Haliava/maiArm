import React from 'react';
import {commonProps} from "../PersonalPage";
import styles from './styles.module.css';
import classNames from "classnames";

type Props = commonProps & {
}

const YourCompetitions = ({className}: Props) => {
    const competitionList = [
        {
            name: 'МЕЖГАЛАКТИЧЕСКОЕ СОРЕВНОВАНИЕ ПО АРМРЕСТЛИНГУ',
            link: '/competitions/arm'
        },
    ];

    return (
        <div className={classNames(className, styles.root)}>
            <div className={styles.heading}>
                Где участвую:
            </div>
            <div className={styles.listContainer}>
                {competitionList.map(competition => (
                    <a className={styles.competitionLink} href={competition.link}>
                        {competition.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default YourCompetitions;