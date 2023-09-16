import React from 'react';
import {commonProps} from "../PersonalPage";
import styles from './styles.module.css';
import classNames from "classnames";
import AchievementsSvg from "./achievementsSVG/AchievementsSVG";

type Props = commonProps & {}

const Achievements = ({className}: Props) => {
    return (
        <div className={classNames(className, styles.root)}>
            <div className={styles.heading}>
                Твои достижения
            </div>
            <div className={styles.svgWrapper}>
                <AchievementsSvg />
            </div>
        </div>
    );
};

export default Achievements;