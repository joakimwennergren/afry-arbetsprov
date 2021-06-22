/**
 * 
 * @category Reducer
 * @package  App
 * @author   Joakim Wennergren <joakim.wennergren@databeams.se>
 * @license  Copyright (C) Joakim Wennergren 2021
 * @link     https://github.com/joakimwennergren/afry-arbetsprov.git
 */
import {
    CREATE_COMPANY,
} from "../actions/company.actions";

export type SessionState = {
    companies: string[];
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