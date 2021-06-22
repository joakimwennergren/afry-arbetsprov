/**
 * Dashboard container
 * 
 * @category Containers
 * @package  Webbapplication
 * @author   Joakim Wennergren <joakim.wennergren@databeams.se>
 * @license  Copyright (C) Databeams AB - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * @link     https://github.com/Databeams/Mikbits-webapplication.git
 */
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trash } from 'react-feather';
import Select from 'react-select'
import { detachUser } from "../actions/user.actions";

const CompanyUserComponent = ({ user }: any) => {

    const dispatch = useDispatch();

    const companies = useSelector((state: any) => state.companies.companies);
    const users = useSelector((state: any) => state.users.users);

    const remove = (user: any) => {
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
