import type React from "react";
import {BigBackgroundSpinner} from "../../../components/BigBackgroundSpinner";
import {ResponseDialog} from "../../../components/Modal/ResponseDialog";
import type { GetUserAttributes } from "../../../types/authAttributes/getUserAttributes";
import type { ReactNode } from "react";
import { convertUTCToLocalDateTime } from "../../../utils/formatDate";
import { Link } from "react-router-dom";

type GetCurrentUserProps = {
    user          : GetUserAttributes | undefined;
    loading       : boolean;
    message       : string;
    errorMessage  : boolean;
    onClick       : React.MouseEventHandler<HTMLButtonElement>;
    isOpen        : boolean;
    divOnclick    : React.MouseEventHandler<HTMLDivElement>;
};

export const GetCurrentUser = ({divOnclick, errorMessage, isOpen, loading, message, onClick, user}: GetCurrentUserProps): ReactNode => {
    const details = [
        { label: "ID", value: user?.id },
        { label: "Name", value: user?.username },
        { label: "Email", value: user?.email },
        { label: "Phone", value: user?.phone },
        { label: "Role", value: user?.userRole },
        { label: "Admin", value: user?.isAdmin ? "Yes" : "No" },
        { label: "Address", value: user?.userAddress },
        { label: "Updated by", value: user?.updatedBy ?? "----" },
        { label: "Created on", value: convertUTCToLocalDateTime(user?.createdAt) },
        { label: "Last Updated", value: convertUTCToLocalDateTime(user?.updatedAt) },
        { label: "Actions", value: <div className="flex flex-row gap-10">
            <Link to={`/auth/update/${user?.id}`} className="font-sans font-bold text-green-600 hover:underline">UPDATE</Link>
        </div> }
    ];
    return (
        <div className="w-full">
            {
                loading ? (
                    <BigBackgroundSpinner />
                ) : (
                    <div className="p-6 bg-white shadow-lg rounded w-[90%] md:w-[70%] mx-auto overflow-y-auto h-[30rem]">
                        {details.map((item, index) => (
                            <div key={index} className="grid grid-cols-2 border-b pb-2 text-sm gap-10">
                                <span className="font-sans font-semibold text-green-600">
                                    {item.label}:
                                </span>
                                <span className={`text-gray-900 font-sans break-words ${item.label === "Role" ? (item.value === "SUPER-ADMIN" || item.value === "ADMIN" ? "text-green-600 font-bold" : "") : ""}${item.label === "Admin" ? (item.value === "Yes" ? "text-green-600 font-bold" : "text-red-600 font-bold") : ""}`}>
                                    {item.value}
                                </span>
                            </div>
                        ))}
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