/**
 * 
 * @category Containers
 * @package  App
 * @author   Joakim Wennergren <joakim.wennergren@databeams.se>
 * @license  Copyright (C) Joakim Wennergren 2021
 * @link     https://github.com/joakimwennergren/afry-arbetsprov.git
 */
import { FunctionComponent } from 'react';
import { useSelector } from "react-redux";
import { ArrowLeft, } from 'react-feather';
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { User } from "../typings/user";
import ListComponent from "../components/list.component";

const UsersContainer: FunctionComponent = (): JSX.Element => {

    const users = useSelector((state: RootState) => state.users.users);

    const renderList = () => {
        if (users || users.length > 0) {
            return users.map((user: User) => {

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
