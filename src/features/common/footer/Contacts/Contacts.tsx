import React from "react";

import styles from './styles.module.css';
import TelegramIcon from "../../../../icons/TelegramIcon";

type Props = {
    contacts: string[],
}

export default function Contacts({contacts}: Props) {
    return (
        <div className={styles.root}>
            <div className={styles.contactUs}>
                Связь с нами
            </div>
            <div className={styles.contactList}>
                {contacts.map((contact, index) => (
                    <div className={styles.contact} key={index}>
                        <TelegramIcon key={index} />
                        <a className={styles.link} href={`https://t.me/${contact}`}>
                            {'@' + contact}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
