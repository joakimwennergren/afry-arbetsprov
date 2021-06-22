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
import { Share2 } from 'react-feather';
import { attachUser } from "../actions/user.actions";
import Select from 'react-select'

const ListComponent = ({ user }: any) => {

    const dispatch = useDispatch();

    const companies = useSelector((state: any) => state.companies.companies);

    const [isExpanded, setIsExpanded] = useState(false);

    const add = (user: any) => {

    }

    const formatCompanies = () => {
        return companies.map((company: any, index: number) => {
            return {
                value: index,
                label: company,
            }
        })
    }

    const onChange = (val: any) => {
        dispatch(attachUser(user, val.value));
    }

    return (
        <>
            <li className="mb-2">
                <span className="w-full flex flex-row justify-between">
                    {user.name}
                    <span onClick={() => setIsExpanded(!isExpanded)} className=" flex flex-row bg-white hover:bg-gray-100 cursor-pointer rounded-lg p-2 shadow-lg" >
                        <Share2 size={18} color="#666" />
                    </span>
                </span>
                {isExpanded &&
                    <div className="mt-2">
                        <Select onChange={onChange} options={formatCompanies()} placeholder="Välj företag" className="w-full mb-2" />
                    </div>
                }
            </li>
        </>
    );
}

export default ListComponent;
