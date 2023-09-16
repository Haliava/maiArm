import React, {useState} from 'react';
import {commonProps} from "../PersonalPage";
import {NativeSelect} from "@mui/material";
import {useSelector} from "react-redux";
import styles from './styles.module.css';
import {lkFieldsIds, lkFieldsMap} from "../../../../constants";
import {RootState} from "../../../../app/store";
import classNames from "classnames";
import {useAppDispatch} from "../../../../app/hooks";
import {submit, updateValue} from "../../../../app/personalReducer";

type Props = commonProps & {}

const PersonalData = ({className}: Props) => {
    const info = lkFieldsIds.map((id, index) => [id, index]);
    const currentInfoSelected = useSelector((state: RootState) => state.personal);
    const dispatch = useAppDispatch();
    const [newInfo, setNewInfo] = useState(structuredClone(currentInfoSelected));

    // @ts-ignore
    const currentInfo = new Map(info);
    const handleInput = (fieldId: string, value: string | number) => {
        // @ts-ignore
        setNewInfo(() => newInfo[fieldId] = value);
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(submit())
    }

    return (
        <div className={styles.root}>
            <div className={styles.text}>
                Личные данные:
            </div>
            <form>
                {lkFieldsIds.map((fieldId, index) => {
                    const {inputTitle, inputType, options} = lkFieldsMap[fieldId];
                    console.log(fieldId, newInfo[fieldId]);

                    return (
                        <div className={styles.input} key={index}>
                            <div className={styles.inputHeader}>{inputTitle}</div>
                            {options && (
                                <NativeSelect
                                    className={classNames(styles.select, styles.inputField)}
                                    defaultValue={newInfo[fieldId]}
                                    onChange={(e) =>
                                        dispatch(updateValue({fieldId, value: e.target.value}))}
                                >
                                    {options.map(option => (
                                        <option value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </NativeSelect>
                            )}

                            {!options && (
                                <input
                                    type={inputType}
                                    onInput={(e) =>
                                        dispatch(updateValue({fieldId, value: e.currentTarget.value}))}
                                    value={currentInfoSelected[fieldId]}
                                    className={styles.inputField}
                                />
                            )}
                        </div>
                    )
                })}
                <button className={styles.submitButton} type="submit" onClick={(e) => handleSubmit(e)}>
                    Сохранить
                </button>
            </form>
        </div>
    );
};

export default PersonalData;