import React from 'react';
import classNames from "classnames";
import regStyles from '../../registration/registrationForm/styles.module.css';
import styles from './styles.module.css';
import {setField, submit} from "../../../../app/registrationReducer";
import {loginPageFieldsMap, LoginPageFieldTypes} from "../../../../constants";
import {useNavigate} from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const redirectToLanding = () => navigate('/');
    const formFields = ['email', 'password'];

    const login = () => {

    }

    return (
        <div className={regStyles.root}>
            <form className={classNames(regStyles.form, styles.loginForm)} onSubmit={(e) => {
                e.preventDefault();
                //return dispatch(submit()); login
            }}>
                {formFields.map((formFieldId, index) => {
                        const {inputTitle, inputType} = loginPageFieldsMap[formFieldId as keyof LoginPageFieldTypes];
                        return (
                            <div key={index} className={regStyles.inputEntry}>
                                <div className={regStyles.inputTitle}>
                                    {inputTitle}
                                </div>
                                <input
                                    className={classNames(regStyles.formInput)}
                                    type={inputType}
                                />
                            </div>
                        )
                    })}
                <div className={classNames(regStyles.buttonContainer, styles.loginButtonContainer)}>
                    <button
                        className={classNames(regStyles.nextStepButton, styles.loginButton, styles.redirectButton)}
                        type='button'
                        onClick={() => redirectToLanding()}
                    >
                        На главную
                    </button>
                    <button
                        className={classNames(regStyles.nextStepButton, styles.loginButton)}
                        type='submit'
                        onClick={() => login()}
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;