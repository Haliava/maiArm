import React, {FormEvent, useState} from 'react';
import classNames from "classnames";
import styles from './styles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {decrementStep, incrementStep, setField, submit} from "../../../../app/registrationReducer";
import {RootState} from "../../../../app/store";
import {formFieldsIds, persFieldsIds, persInfoMap, formFieldsMap} from "../../../../constants";
import {FormFieldsMapType, PersInfoMapType} from "../../../../constants";
import Dropdown from "../dropdown/Dropdown";

enum STEPS {
    ACCOUNT_REGISTRATION,
    UNIVERSITY_INFO,
}

function RegistrationPage() {
    const step = useSelector((state: RootState) => state.registration.step);
    const persInfo = useSelector((state: RootState) => state.registration);
    const [activeFieldsMap, setActiveFieldsMap] = useState(
        new Map(Object
            .entries(persInfo)
            .filter(field => persInfoMap[field[0] as keyof PersInfoMapType]?.options)
            .map(field => [field[0], false]))
    );
    const dispatch = useDispatch();

    const toggleDropdown = (id: string) => {
        console.log(id, activeFieldsMap.get(id));
        setActiveFieldsMap(activeFieldsMap.set(id, !activeFieldsMap.get(id)));
    }

    return (
        <div className={styles.root}>
            <form className={styles.form} onSubmit={(e) => {
                e.preventDefault();
                return dispatch(submit());
            }}>
                {step === STEPS.ACCOUNT_REGISTRATION &&
                formFieldsIds.map((formFieldId, index) => {
                    const {inputTitle, inputType, note} = formFieldsMap[formFieldId as keyof FormFieldsMapType];
                    return (
                        <div key={index} className={styles.inputEntry}>
                            <div className={styles.inputTitle}>
                                {inputTitle}
                            </div>
                            <input
                                className={classNames(styles.formInput)}
                                type={inputType}
                                value={persInfo[formFieldId as keyof FormFieldsMapType] || ''}
                                onInput={(e) =>
                                    dispatch(setField({
                                        fieldName: formFieldId,
                                        fieldValue: e.currentTarget.value,
                                    }))
                                }
                            />
                            {note &&
                            <p className={styles.formNote}>
                                {note}
                            </p>}
                        </div>
                    )
                })}
                {step === STEPS.UNIVERSITY_INFO &&
                persFieldsIds.map((persFieldId, index) => {
                    const {inputTitle, inputType, note} = persInfoMap[persFieldId as keyof PersInfoMapType];
                    return (
                        <div key={index} className={styles.inputEntry}>
                            <div className={styles.inputTitle}>
                                {inputTitle}
                            </div>
                            {activeFieldsMap.get(persFieldId) !== undefined ?
                                <Dropdown
                                    key={index}
                                    onInput={(e: FormEvent<HTMLInputElement>) =>
                                        dispatch(setField({
                                            fieldName: persFieldId,
                                            fieldValue: e.currentTarget.value,
                                        }))}
                                    onClick={() => {
                                        toggleDropdown(persFieldId)
                                    }}
                                    activeFieldsMap={activeFieldsMap}
                                    setActiveFieldsMap={setActiveFieldsMap}
                                    persFieldId={persFieldId}
                                    options={['1', '2', '3']}
                                />
                                :
                                <input
                                    className={styles.formInput}
                                    type={inputType}
                                    value={persInfo[persFieldId as keyof PersInfoMapType] || ''}
                                    onInput={(e) =>
                                        dispatch(setField({
                                            fieldName: persFieldId,
                                            fieldValue: e.currentTarget.value,
                                        }))
                                    }
                                />
                            }
                            {note &&
                            <p className={styles.formNote}>
                                {note}
                            </p>}
                        </div>
                    )
                })}

                {step === STEPS.ACCOUNT_REGISTRATION &&
                    <button className={styles.nextStepButton} type='button' onClick={() => dispatch(incrementStep())}>
                        Далее
                    </button>
                }

                {step === STEPS.UNIVERSITY_INFO &&
                    <div className={styles.buttonContainer}>
                        <button className={styles.nextStepButton} type='button' onClick={() => dispatch(decrementStep())}>
                            Назад
                        </button>
                        <button className={styles.nextStepButton} type='submit'>
                            Зарегистрироваться
                        </button>
                    </div>
                }

            </form>
        </div>
    );
}

export default RegistrationPage;
