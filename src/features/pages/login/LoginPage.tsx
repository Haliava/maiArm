import React from 'react';
import LoginForm from "./loginForm/LoginForm";
import styles from './styles.module.css';

const LoginPage = () => {
    return (
        <div className={styles.main}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;