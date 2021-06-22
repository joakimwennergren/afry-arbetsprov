/**
 * 
 * @category Reducer
 * @package  App
 * @author   Joakim Wennergren <joakim.wennergren@databeams.se>
 * @license  Copyright (C) Joakim Wennergren 2021
 * @link     https://github.com/joakimwennergren/afry-arbetsprov.git
 */
import {
    CREATE_USER,
    DETACH_USER,
    ATTACH_USER,
} from "../actions/user.actions";

import { User } from "../typings/user";

export type SessionState = {
    users: User[];
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

            const users = state.users.map((user: User) => {
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

            const newUsers = state.users.map((user: User) => {
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