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
import { ArrowRight, Plus } from 'react-feather';
import Select from 'react-select'
import { Link } from "react-router-dom";
import { createUser } from "../actions/user.actions";
import { toast } from 'react-toastify';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


const UsersContainer = () => {

    // Redux dispatch
    const dispatch = useDispatch();

    const [userName, setUserName] = useState("");
    const [selectedCompany, setSelectedCompany] = useState(-1);

    const create = () => {
        if (userName.length > 0) {
            dispatch(createUser({ uniqueID: Math.floor(Math.random() * 999999999), name: userName, company: selectedCompany }));
            toast("Användare skapad!");
        }
    }

    const companies = useSelector((state: any) => state.companies.companies);


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

    return (
        <>
            <div className="flex flex-col w-full h-screen bg-gray-100 justify-center items-center">
                <div className="w-full md:w-1/4">
                    <h1 className="text-3xl text-gray-400 mb-2">Skapa en användare</h1>
                    <input onInput={(e: any) => setUserName(e.target.value)} placeholder="Ditt förnamn" type="text" className="bg-white p-2 shadow-lg w-full mb-2 rounded-md" />
                    <Select onChange={onChange} options={formatCompanies()} placeholder="Välj företag" className="w-full mb-2" />
                    <div className="flex flex-row justify-between">
                        <span onClick={create} className="flex flex-row bg-white hover:bg-gray-100 cursor-pointer rounded-lg p-2 shadow-lg" >
                            <Plus size={32} color="#666" /> <span className="mt-1">Skapa användare</span>
                        </span>
                        <Link to="/companies">
                            <span className="flex flex-row bg-white hover:bg-gray-100 cursor-pointer rounded-lg p-2 shadow-lg" >
                                <ArrowRight size={32} color="#666" /> <span className="mt-1">Skapa företag</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersContainer;
