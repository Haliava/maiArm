import React from 'react';
import classNames from "classnames";
import {commonProps} from "../PersonalPage";
import styles from './styles.module.css';
import PhotoPlaceholder from "../../../../icons/PhotoPlaceholder";


type Props = commonProps & {
}

const PhotoWithName = ({className}: Props) => {
    const name = 'ivan';
    const surname = 'klimov';
    const teamName = 'zzz';

    return (
        <div className={styles.wrapper}>
            <div className={classNames(className, styles.root)}>
                <PhotoPlaceholder />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.name}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.name}>{surname}</div>
                </div>
                {teamName && (
                    <div className={styles.teamName}>
                        {teamName}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhotoWithName;