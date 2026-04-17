import type React from "react";
import {BigBackgroundSpinner} from "../../../components/BigBackgroundSpinner";
import {ResponseDialog} from "../../../components/Modal/ResponseDialog";
import type { GetUserAttributes } from "../../../types/authAttributes/getUserAttributes";
import type { JSX } from "react";
import { convertUTCToLocalDateTime } from "../../../utils/formatDate";
import { Link } from "react-router-dom";

type GetUserProps = {
    user          : GetUserAttributes;
    loading       : boolean;
    message       : string;
    errorMessage  : boolean;
    onClick       : React.MouseEventHandler<HTMLButtonElement>;
    isOpen        : boolean;
    divOnclick    : React.MouseEventHandler<HTMLDivElement>;
};

export const GetUser = ({divOnclick, errorMessage, isOpen, loading, message, onClick, user}: GetUserProps): JSX.Element => {
    return (
        <div className="w-full bg-white mx-auto p-10">
            {
                loading ? (
                    <BigBackgroundSpinner />
                ): (
                    <div className="overflow-x-auto">
                        <table className="min-w-max text-left border">
                            <thead className="text-green-600 font-sans">
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Id</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Username</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">User Address</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Phone</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Email</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Role</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Admin</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Updated By</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Created On</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Last Updated</th>
                                    <th className="py-2 px-4 text-xs md:text-sm break-words">Update</th>
                                </tr>
                            </thead>
                            <tbody className="font-sans text-gray-600">
                                <tr className="border-b border-gray-700">
                                    <td className="py-6 px-4 text-xs md:text-sm break-words">{user.id}</td>
                                    <td className="py-6 px-4 text-xs md:text-sm break-words">{user.username}</td>
                                    <td className="py-2 px-4 text-xs md:text-sm break-words">{user.userAddress}</td>
                                    <td className="py-6 px-4 text-xs md:text-sm break-words">{user.phone}</td>
                                    <td className="py-6 px-4 text-xs md:text-sm break-words">{user.email}</td>
                                    <td className="py-6 px-4 text-xs md:text-sm break-words">{user.userRole}</td>
                                    <td className="py-6 px-4 text-xs md:text-sm break-words font-bold">{user.isAdmin ? "Yes" : "No"}</td>
                                    <td className="py-6 px-4 text-xs md:text-sm break-words">{user.updatedBy}</td>
                                    <td className="py-6 px-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(user.createdAt)}</td>
                                    <td className="py-6 px-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(user.updatedAt)}</td>
                                    <td className="py-6 px-4 text-sm md:text-lg break-words font-bold text-green-600 wit-fit hover:underline"><Link to={`/update/${user.id}`}>Update</Link></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
                    </div>
                )
            }
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