import React, {useRef} from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";
import styles from "./styles.module.css";
import {persInfoMap, PersInfoMapType} from "../../../../constants";
import {RootState} from "../../../../app/store";

type Props = {
    onInput: any,
    onClick: any,
    persFieldId: string,
    activeFieldsMap: Map<string, boolean>,
    setActiveFieldsMap: any,
    options: string[],
}

const Dropdown = ({onInput, onClick, persFieldId, setActiveFieldsMap, activeFieldsMap, options}: Props) => {
    const persInfo = useSelector((state: RootState) => state.registration);
    const {inputType} = persInfoMap[persFieldId as keyof PersInfoMapType];

    const toggleDropdown = (id: string) => {
        console.log(id, activeFieldsMap.get(id));
        setActiveFieldsMap(activeFieldsMap.set(id, !activeFieldsMap.get(id)));
    }

    return (
        <div
            className={classNames(styles.dropdown, {
                [styles.active]: activeFieldsMap.get(persFieldId),
            })}
            onClick={() => toggleDropdown(persFieldId)}
        >
            <input
                className={styles.formInput}
                type={inputType}
                value={persInfo[persFieldId as keyof PersInfoMapType] || ''}
            />
            <div className={styles.options}>
                {options && options.map(option => (
                    <div onClick={onInput}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;