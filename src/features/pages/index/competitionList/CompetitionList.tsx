import React from 'react';
import styles from './styles.module.css';

type Props = {
    competitions: string[],
}

function CompetitionList({competitions}: Props) {
    return (
        <div className={styles.root}>
            <div className={styles.listTitle}>
                Список соревнований:
            </div>
            <ul className={styles.list}>
                {competitions.map((competition, index) => (
                    <li key={index} className={styles.listItem}>
                        {competition}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CompetitionList;
