import {createSlice} from "@reduxjs/toolkit";
import {FACULTIES, RegistrationStateType, STAGES} from "./registrationReducer";

export type UpdatePersonalDataType = Omit<RegistrationStateType, 'repeatPassword'>;

const initialState: UpdatePersonalDataType = {
    email: '',
    password: '',
    telegram: '@',
    name: '',
    surname: '',
    stage: STAGES.BACHELORS,
    course: '2',
    faculty: FACULTIES.EIGHT,
    team: '',
    step: 0,
};

type UpdateValuePayload = {
    action: string,
    payload: {
        fieldId: keyof UpdatePersonalDataType,
        value: string,
    }
}

const personalSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        submit(state) {

        },
        updateValue(state, {payload}) {
            // @ts-ignore
            state[payload.fieldId] = payload.value;
        }
    }
})

export default personalSlice.reducer;
export const {updateValue, submit} = personalSlice.actions;