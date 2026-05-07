import type { ReactNode } from "react";
import type { GetAllUsersAttributes } from "../../types/authAttributes/getAllUsersAttributes";
import { Link } from "react-router-dom";



type AllUsersProps = {
    filteredUsers  : GetAllUsersAttributes;
};

export const AllUsers = ({filteredUsers}: AllUsersProps): ReactNode => {
    return (
        <div className="my-[4rem] text-white">
            <h1 className="font-sans text-center mb-10 font-bold text-lg md:text-xl">Users</h1>
            {
                filteredUsers?.length > 0 ? (
                    <ul className="grid md:grid-cols-3 grid-col-1 gap-4 justify-items-center md:justify-items-start">
                        {
                            filteredUsers.map((user) => (
                               <Link to={`/auth/user?userId=${user.id}`} key={user.id} className="w-[80%] flex-shrink-0">
                                    <li className="font-sans text-sm bg-[#0E2A22] break-words p-6 space-y-4 border border-green-800 shadow-2xl z-50">
                                        <div className="flex flex-row gap-4 justify-center items-center text-center">
                                            <p className="rounded-full p-2 font-bold bg-yellow-600 text-black font-sans">{user.username.substring(0, 2).toUpperCase()}</p>
                                            <p className="text-blue-400">{user.username}</p>
                                        </div>
                                        <p className="text-center font-sans">{user.user_role}</p>
                                        <p className="text-center font-sans">{user.phone}</p>
                                    </li>
                               </Link>
                            ))
                        }
                    </ul>
                ) : (
                    <p className="text-center items-center font-sans text-sm md:text-lg">Users not found!</p>
                )
            }
        </div>
    );
};