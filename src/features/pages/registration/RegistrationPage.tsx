import React from 'react';
import styles from './styles.module.css';
import RegistrationForm from "./registrationForm/RegistrationForm";

function RegistrationPage() {
    return (
        <div className={styles.main}>
            <RegistrationForm />
        </div>
    );
}

export default RegistrationPage;
