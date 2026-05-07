import type { JSX } from "react";


export const ParkingHeader = ():JSX.Element => {
    return (
        <header className="top-0 right-0 left-0 fixed bg-blue-950 flex text-left p-2 font-extrabold md:text-4xl text-2xl text-white">
            <button onClick={() => window.history.back()}>&larr;</button>
        </header>
    );
};