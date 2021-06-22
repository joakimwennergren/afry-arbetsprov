/**
 * Redux store
 * 
 * @category Reducer
 * @package  App
 * @author   Joakim Wennergren <joakim.wennergren@activequiz.com>
 * @license  Copyright (C) ActiveQuiz AB - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * @link     https://github.com/ActiveQuiz-AB/ActiveQuiz-mobile-app
 */
import {
    CREATE_COMPANY,
    CREATE_COMPANY_FAILED,
    CREATE_COMPANY_SUCCESS
} from "../actions/company.actions";

export type SessionState = {
    companies: any;
}

export type SessionAction = {
    type: string;
    payload: any;
}

const defaultState: SessionState = {
    companies: [],
};

export const companyReducer = (state: SessionState = defaultState, action: SessionAction): SessionState => {

    const { type, payload } = action;

    // Switch on each actiontype. 
    // if no eactiontype is received return defaultState.

    switch (type) {

        case CREATE_COMPANY:
            return {
                ...state,
                companies: [...state.companies, payload],
            }

        default: return state;
    }
};