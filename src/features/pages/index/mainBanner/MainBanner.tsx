import React from 'react';
import classNames from 'classnames';
import {useNavigate} from 'react-router-dom';

import {titleText, mainPageButtonText} from '../../../../constants';
import MAIicon from '../../../../icons/MAIicon';
import styles from './styles.module.css';

function MainBanner() {
    const navigate = useNavigate();
    const openPage = (newPath: string) => {
        navigate(newPath);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.root}>
                <div className={styles.main}>
                    <div className={styles.title}>
                        {titleText}
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.infoText}>
                            МАИ.
                            17&nbsp;СЕНТЯБРЯ.
                            СТРЕШНЕВО.
                        </div>
                        <div className={styles.buttons}>
                            <button className={classNames(styles.button, styles.takePart)} onClick={() => (
                                openPage('/register')
                            )}>
                                {mainPageButtonText[0]}
                            </button>
                            <button className={classNames(styles.button, styles.moreInfo)} onClick={() => (
                                openPage('/competitions/arm')
                            )}>
                                {mainPageButtonText[1]}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.MAIicon}>
                    <MAIicon/>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;