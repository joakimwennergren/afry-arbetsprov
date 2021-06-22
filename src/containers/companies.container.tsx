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
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight, Plus, ArrowLeft, Trash } from 'react-feather';
import Select from 'react-select'

import { createCompany } from "../actions/company.actions";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import CompanyUserComponent from '../components/companyuser.component';


const UsersContainer = () => {

    // Redux dispatch
    const dispatch = useDispatch();

    const [companyName, setCompanyName] = useState("");
    const [selectedCompany, setSelectedCompany] = useState(-1);

    const companies = useSelector((state: any) => state.companies.companies);
    const users = useSelector((state: any) => state.users.users);

    const create = () => {
        if (companyName.length > 0) {
            dispatch(createCompany(companyName));
            toast("Företag skapad!");
        }
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
        setSelectedCompany(val.value);
    }

    const renderList = () => {
        const companyUsers = users.filter((user: any) => {
            if (user) {
                return user.company === selectedCompany && user.company !== -1;
            }

        });

        return companyUsers.map((user: any, index: number) => {

            return <CompanyUserComponent key={`company-user-${index}`} user={user} />
        });
    }

    return (
        <>
            <div className="flex flex-col w-full h-screen bg-gray-100 justify-center items-center">
                <div className="w-full md:w-1/4">
                    <h1 className="text-xl text-gray-400 mb-2">Skapa ett företag</h1>
                    <input onInput={(e: any) => setCompanyName(e.target.value)} placeholder="Företagets namn" type="text" className="bg-white p-2 shadow-lg w-full mb-2 rounded-md" />
                    <Link to="/companies">
                        <span onClick={create} className="float-right flex flex-row bg-white hover:bg-gray-100 cursor-pointer rounded-lg p-2 shadow-lg" >
                            <Plus size={32} color="#666" /> <span className="mt-1">Skapa företag</span>
                        </span>
                    </Link>
                </div>
                <div className="w-full md:w-1/4 mt-2">
                    <h1 className="text-xl text-gray-400 mb-2">Användare i valt företag</h1>
                    <Select onChange={onChange} options={formatCompanies()} placeholder="Välj företag" className="w-full mb-2" />
                    {selectedCompany === -1 ?
                        <span className="text-sm mt-2 text-gray-400">(Personerna kommer listas här under när du väljer ett företag.)</span>
                        :
                        <ul>
                            {renderList()}
                        </ul>
                    }

                    <div className="flex flex-row justify-between mt-2">
                        <Link to="/">
                            <span className=" flex flex-row bg-white hover:bg-gray-100 cursor-pointer rounded-lg p-2 shadow-lg" >
                                <ArrowLeft size={32} color="#666" /> <span className="mt-1">Tillbaka</span>
                            </span>
                        </Link>
                        <Link to="/list">
                            <span className=" flex flex-row bg-white hover:bg-gray-100 cursor-pointer rounded-lg p-2 shadow-lg" >
                                <ArrowRight size={32} color="#666" /> <span className="mt-1">Lista personer utan företag</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersContainer;
