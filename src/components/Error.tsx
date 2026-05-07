import type { ReactNode } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";



const Error = (): ReactNode => {
    const err = useRouteError();

    const isError = (error: unknown): error is Error => {
        return typeof error === "object" && error !== null && "message" in error;
    };

    if (isRouteErrorResponse(err)) {
        return (
            <div className="w-full">
                <div className="bg-white w-[80%] mx-auto break-words p-6 space-y-4 font-sans font-semibold text-red-600 md:mt-[6rem] mt-[8rem]  animate-pulse shadow-2xl z-50 rounded-lg">
                    <h1>OOPS</h1>
                    <h2>Something went wrong!</h2>
                    <h3>
                        {err.data} <br />
                        {err.status} : {err.statusText}
                    </h3>
                </div>
            </div>
        );
    };
    if (isError(err)) {
        return (
            <div className="w-full">
                <div className="bg-white w-[80%] mx-auto break-words p-6 space-y-4 font-sans font-semibold text-red-600 md:mt-[6rem] mt-[8rem]  animate-pulse shadow-2xl z-50 rounded-lg">
                    <h1>OOPS</h1>
                    <h2>Unexpected Error</h2>
                    <pre>{err.message}</pre>
                </div>
            </div>
        );
    };
    return (
        <div className="w-full">
            <div className="bg-white w-[80%] mx-auto break-words p-6 space-y-4 font-sans font-semibold text-red-600 md:mt-[6rem] mt-[8rem]  animate-pulse shadow-2xl z-50 rounded-lg">
                <h1>OOPS</h1>
                <h2>Unknown Error</h2>
            </div>
        </div>
    );
};
export default Error;