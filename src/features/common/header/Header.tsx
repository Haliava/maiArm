import React from 'react';
import classNames from 'classnames';

import {headerButtonText} from '../../../constants';
import ManArmIcon from '../../../icons/ManArmIcon';
import styles from './styles.module.css';
import {useNavigate} from "react-router-dom";

type Props = {
    isLoggedIn: boolean,
}

function Header({isLoggedIn}: Props) {
    const routeFirstButton = isLoggedIn ? '/me' : '/register';
    const routeSecondButton = isLoggedIn ? '/logout' : '/login';
    const navigate = useNavigate();
    const changeRoute = (to: string) => {
        navigate(to);
    }

    return (
        <div className={styles.root}>
            <a className={styles.headerIconAndText} href={'/'}>
                <ManArmIcon />
                <div className={styles.headerText}>
                    <div className={styles.siteTitle}>MAIsport.ru</div>
                    <div>Армрестлинг в МАИ</div>
                </div>
            </a>
            <div className={styles.buttons}>
                <button
                    className={classNames({
                        [styles.button]: true,
                        [styles.buttonContact]: true,
                    })}
                    onClick={() => changeRoute(routeFirstButton)}
                >
                    {headerButtonText[0]}
                </button>
                <button
                    className={styles.button}
                    onClick={() => changeRoute(routeSecondButton)}
                >
                    {headerButtonText[1]}
                </button>
            </div>
        </div>
    );
}

export default Header;
