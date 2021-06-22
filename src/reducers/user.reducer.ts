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
    CREATE_USER,
    DETACH_USER,
    ATTACH_USER,
} from "../actions/user.actions";

export type SessionState = {
    users: any;
}

export type SessionAction = {
    type: string;
    payload: any;
}

const defaultState: SessionState = {
    users: [],
};

export const userReducer = (state: SessionState = defaultState, action: SessionAction): SessionState => {

    const { type, payload } = action;

    // Switch on each actiontype. 
    // if no eactiontype is received return defaultState.

    switch (type) {

        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, payload],
            }

        case DETACH_USER:

            const users = state.users.map((user: any) => {
                if (user.uniqueID === payload.uniqueID) {
                    user.company = -1;
                }
                return user;
            })

            return {
                ...state,
                users: users,
            }

        case ATTACH_USER:

            const newUsers = state.users.map((user: any) => {
                if (user.uniqueID === payload.user.uniqueID) {
                    user.company = payload.companyIndex;
                }
                return user;
            })

            return {
                ...state,
                users: newUsers,
            }

        default: return state;
    }
};