/**
 * 
 * @category Reducer
 * @package  App
 * @author   Joakim Wennergren <joakim.wennergren@databeams.se>
 * @license  Copyright (C) Joakim Wennergren 2021
 * @link     https://github.com/joakimwennergren/afry-arbetsprov.git
 */
import { combineReducers } from 'redux';
import { userReducer } from "./user.reducer";
import { companyReducer } from './companies.reducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    users: userReducer,
    companies: companyReducer,
});