/**
 * @category Components
 * @package  App
 * @author   Joakim Wennergren <joakim.wennergren@databeams.se>
 * @license  Copyright (C) Joakim Wennergren 2021
 * @link     https://github.com/joakimwennergren/afry-arbetsprov.git
 */
import { useState, FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Share2 } from 'react-feather';
import { attachUser } from "../actions/user.actions";
import { RootState } from "../store/store";
import { User } from "../typings/user";
import Select from 'react-select'

export type ListComponentProps = {
    user: User;
}

const ListComponent: FunctionComponent<ListComponentProps> = ({ user }): JSX.Element => {

    const dispatch = useDispatch();

    // State
    const [isExpanded, setIsExpanded] = useState(false);

    // Selectors
    const companies = useSelector((state: RootState) => state.companies.companies);

    const formatCompanies = () => {
        return companies.map((company: string, index: number) => {
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
