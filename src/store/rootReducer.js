import { combineReducers } from '@reduxjs/toolkit';
import generalReducer from "../store/general/generalSlice"

const rootReducer = combineReducers({
    general: generalReducer
});

export default rootReducer;
