/**
 * Root reducer
 * React-native version 0.63.3
 * 
 * @category Reducers
 * @package  App
 * @author   Joakim Wennergren <joakim@activequiz.com>
 * @license  Copyright (C) ActiveQuiz AB - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * @link     https://github.com/ActiveQuiz-AB/ActiveQuiz-mobile-app
 */
import { combineReducers } from 'redux';
import { userReducer } from "./user.reducer";
import { companyReducer } from './companies.reducer';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    users: userReducer,
    companies: companyReducer,
});