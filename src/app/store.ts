import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import counterReducer from '../features/counter/counterSlice';
import registrationReducer from "./registrationReducer";
import personalReducer from "./personalReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  registration: registrationReducer,
  personal: personalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
