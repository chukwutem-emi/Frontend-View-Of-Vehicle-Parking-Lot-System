import type {ResponseDialogAttributes} from "../../types/dialog";


export const ResponseDialog = ({message, errMessage, onClick, isOpen, divOnClick}: ResponseDialogAttributes) => {
    if (!isOpen) return null;
    return (
        <div className="w-full fixed inset-0 bg-black/50 flex justify-center items-center z-50" onClick={divOnClick}>
            <div className="bg-white w-[70%] xl:w-[30%] p-6 shadow-2xl rounded" onClick={(e) => e.stopPropagation()}>
                {
                    message && (
                        <div
                        className={`w-full break-words font-sans font-semibold rounded xs:text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] ${errMessage ? "text-red-600 animate-pulse" : "text-green-900"}`}
                        >
                            {message}
                        </div>
                    )
                }
                <div className="flex justify-end gap-3 mt-6">
                <button onClick={onClick} className={`px-2 py-1 w-fit font-sans rounded text-sm xl:text-lg ${errMessage ? "text-white bg-red-500 hover:bg-red-400" : "text-white bg-green-900 hover:bg-green-600"}`}>
                    OK
                </button>
                </div>
            </div>
        </div>
    );
};