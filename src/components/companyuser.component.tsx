/**
 * @category Components
 * @package  App
 * @author   Joakim Wennergren <joakim.wennergren@databeams.se>
 * @license  Copyright (C) Joakim Wennergren 2021
 * @link     https://github.com/joakimwennergren/afry-arbetsprov.git
 */
import { FunctionComponent } from 'react';
import { useDispatch } from "react-redux";
import { Trash } from 'react-feather';
import { User } from "../typings/user";
import { detachUser } from "../actions/user.actions";

export type CompanyUserComponentProps = {
    user: User;
}
const CompanyUserComponent: FunctionComponent<CompanyUserComponentProps> = ({ user }): JSX.Element => {

    const dispatch = useDispatch();

    const remove = (user: User) => {
        dispatch(detachUser(user));
    }

    return (
        <>
            <li className="mb-2">
                <span className="w-full flex flex-row justify-between">
                    {user.name}
                    <span onClick={() => remove(user)} className=" flex flex-row bg-white hover:bg-gray-100 cursor-pointer rounded-lg p-2 shadow-lg" >
                        <Trash size={18} color="#666" />
                    </span>
                </span>
            </li>
        </>
    );
}

export default CompanyUserComponent;
