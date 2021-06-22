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
import { useSelector } from "react-redux";
import { ArrowLeft, } from 'react-feather';
import { Link } from "react-router-dom";
import ListComponent from "../components/list.component";



const UsersContainer = () => {

    const usersNotBoundToCompany = useSelector((state: any) => state.users.users);

    const renderList = () => {
        if (usersNotBoundToCompany || usersNotBoundToCompany.length > 0) {
            return usersNotBoundToCompany.map((user: any) => {

                if (user.company !== -1) return;

                return (
                    <ListComponent user={user} />
                )
            })

        }
    }

    return (
        <>
            <div className="flex flex-col w-full h-screen bg-gray-100 justify-center items-center">
                <div className="w-full md:w-1/4 mt-2">
                    <h1 className="text-xl text-gray-400 mb-2">Användare som saknar företag</h1>
                    <ul>
                        {renderList()}
                    </ul>
                    <div className="flex flex-row justify-between mt-2">
                        <Link to="/companies">
                            <span className=" flex flex-row bg-white hover:bg-gray-100 cursor-pointer rounded-lg p-2 shadow-lg" >
                                <ArrowLeft size={32} color="#666" /> <span className="mt-1">Tillbaka</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UsersContainer;
