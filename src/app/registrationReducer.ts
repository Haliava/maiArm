import {createAction, createReducer} from "@reduxjs/toolkit";

export enum STAGES {
    BACHELORS = 'Бакалавриат',
    MASTERS = 'Магистратура',
    SPECIAL = 'Специалитет',
    GRADUATE = 'Аспирантура',
}
export enum FACULTIES {
    EIGHT = 'Институт №8 «Информационные технологии и прикладная математика»'
}

export type RegistrationStateType = {
    email: string,
    password: string,
    repeatPassword: string,
    telegram: string,
    name: string,
    surname: string,
    stage: STAGES,
    course: string,
    faculty: FACULTIES,
    team: string,
    step: number,
}
type SetFieldPayloadType = {
    fieldName: string,
    fieldValue: string | number,
    dropdownIsActiveToggle?: boolean, // only for dropdowns
};

const initialState: RegistrationStateType = {
    email: '',
    password: '',
    repeatPassword: '',
    telegram: '@',
    name: '',
    surname: '',
    stage: STAGES.BACHELORS,
    course: '2',
    faculty: FACULTIES.EIGHT,
    team: '',
    step: 0,
};

export const setField = createAction<SetFieldPayloadType>('SET_FIELD');
export const incrementStep = createAction('INCREMENT_STEP');
export const decrementStep = createAction('DECREMENT_STEP');
export const submit = createAction('SUBMIT');

export default createReducer(initialState, {
    // @ts-ignore
    [setField]: (state, {payload}) => {
        state[payload.fieldName] = payload.fieldValue;
    },
    // @ts-ignore
    [incrementStep]: (state) => {
        if (state.step < 1) state.step = state.step + 1;
    },
    // @ts-ignore
    [decrementStep]: (state) => {
        if (state.step > 0) state.step = state.step - 1;
    },
    // @ts-ignore
    [submit]: (state) => {
        fetch('hid/registration', {
            method: 'POST',
            body: state.registration,
        }).then(response => {

        }).catch(error => {

        })
    }
});