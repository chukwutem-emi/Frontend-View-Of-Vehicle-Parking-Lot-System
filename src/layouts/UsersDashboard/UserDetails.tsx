import type { JSX } from "react";
import type { GetUserAttributesWithUnderScore } from "../../types/authAttributes/getUserAttributes";
import { convertUTCToLocalDateTime } from "../../utils/formatDate";


type UserDetailsProps = {
    selectedUser : GetUserAttributesWithUnderScore | null;
    isDivOpen    : boolean;
};

export const UserDetails = ({selectedUser, isDivOpen}: UserDetailsProps): JSX.Element => {
    return (
        <>
        {
            selectedUser && isDivOpen && (
                <div className="absolute mt-4 p-6 bg-white shadow-lg rounded w-[70%] mx-auto z-50">
                    <div className="overflow-x-auto">
                        <table className="min-w-max border mt-4 text-left">
                            <thead className="text-green-600 font-sans">
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-4 md:text-sm text-xs">ID</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Username</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">User Address</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Phone</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Email</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Role</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Admin</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Updated By</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Created On</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Last Updated</th>
                                </tr>
                            </thead>
                            <tbody className="text-green font-sans">
                                <tr>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words text-yellow-700">{selectedUser.id}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedUser.username}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedUser.user_address}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedUser.phone}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedUser.email}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedUser.user_role}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedUser.is_admin ? "Yes" : "No"}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedUser.updated_by}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{convertUTCToLocalDateTime(selectedUser.created_at)}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{convertUTCToLocalDateTime(selectedUser.updated_at)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
                    </div>
                </div>
            )
        }
        </>
    );
};