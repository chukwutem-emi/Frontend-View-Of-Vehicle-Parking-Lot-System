import type { PaginationAttributes } from "../../../types/paginationAttributes";
import {Pagination} from "./Pagination";
import type {GetAllUsersAttributes} from "../../../types/authAttributes/getAllUsersAttributes";
import {convertUTCToLocalDateTime} from "../../../utils/formatDate";
import {BigBackgroundSpinner} from "../../../components/BigBackgroundSpinner";
import {ResponseDialog} from "../../../components/Modal/ResponseDialog";
import type React from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";


type GetAllUsersProps = {
    pagination    : PaginationAttributes;
    setPagination : React.Dispatch<React.SetStateAction<PaginationAttributes>>;
    users         : GetAllUsersAttributes;
    loading       : boolean;
    message       : string;
    errorMessage  : boolean;
    onClick       : React.MouseEventHandler<HTMLButtonElement>;
    isOpen        : boolean;
    divOnclick    : React.MouseEventHandler<HTMLDivElement>
};


export const GetAllUsers = ({pagination, setPagination, users, loading, errorMessage, message, divOnclick, isOpen, onClick}: GetAllUsersProps): JSX.Element => {
    return (
        <div className="bg-white w-full mx-auto p-10">
            {
                loading ? (
                    <div>
                        <BigBackgroundSpinner />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-max border mt-4 text-left">
                            <thead className="text-green-600 font-sans">
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-4 md:text-sm text-xs">ID</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Username</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">User Address</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Phone</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Email</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Role</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Admin</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Updated By</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Created On</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Last Updated</th>
                                    <th className="py-2 px-4 text-xs md:text-sm">Promote</th>
                                    <th className="py-2 px-4 text-xs md:text-sm text-yellow-600">Demote</th>
                                    <th className="py-2 px-4 text-xs md:text-sm text-red-600">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 font-sans">
                                {
                                    users?.map((user) => (
                                        <tr key={user.id} className="border-b border-gray-700">
                                            <td className="py-4 px-4 text-xs md:text-sm break-words text-yellow-700">{user.id}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words">{user.username}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words">{user.user_address}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words">{user.phone}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words">{user.email}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words">{user.user_role}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words font-bold">{user.is_admin ? "Yes": "No"}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words">{user.updated_by}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(user.created_at)}</td>
                                            <td className="py-4 px-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(user.updated_at)}</td>
                                            <td className="py-4 px-4 text-sm md:text-lg break-words text-green-600 font-sans font-bold w-fit hover:underline"><Link to={`/app/promote/${user.id}`}>Promote</Link></td>
                                            <td className="py-4 px-4 text-sm md:text-lg break-words text-yellow-600 font-sans font-bold w-fit hover:underline"><Link to={`/app/demote/${user.id}`}>Demote</Link></td>
                                            <td className="py-4 px-4 text-sm md:text-lg break-words text-red-600 font-sans font-bold w-fit hover:underline"><Link to={`/app/delete/${user.id}`}>Delete</Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
                    </div>
                )
            }
            <Pagination
            pagination={pagination}
            setPagination={setPagination} 
            />
            <ResponseDialog
            divOnClick={divOnclick}
            errMessage={errorMessage}
            isOpen={isOpen}
            message={message}
            onClick={onClick} 
            />
        </div>
    );
};