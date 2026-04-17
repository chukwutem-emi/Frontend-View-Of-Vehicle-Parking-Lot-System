import type { JSX } from "react";
import type { GetAllUsersAttributes } from "../../types/authAttributes/getAllUsersAttributes";
import { useAuthTypewriter } from "../../features/auth/hooks/useAuthTypewriter";



type AllUsersProps = {
    users: GetAllUsersAttributes;
};

export const AllUsers = ({users}: AllUsersProps):JSX.Element => {
    return (
        <div className="my-[4rem] text-white">
            <h1 className="font-sans text-center mb-10 font-bold text-lg md:text-xl">Users</h1>
            {
                users?.length > 0 ? (
                    <ul className="w-[2000px] flex gap-3 animate-scroll whitespace-nowrap">
                        {
                            [...users, ...users].map((user, index) => (
                                <li key={`${user.id}-${index}`} className="w-64 flex-shrink-0 bg-gradient-to-tr from-[#0E2A22] to-[#0E3A22] z-20 p-6 text-sm break-words font-sans">
                                    <div className="flex flex-row gap-3 text-center">
                                        <p className="rounded-full p-2 bg-yellow-600">{user?.username.substring(0, 2).toUpperCase()}</p>
                                        <p>{useAuthTypewriter(user?.username, 200)}</p>
                                    </div>
                                    <p className="text-center mt-[2rem]">{user?.user_role}</p>
                                </li>
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