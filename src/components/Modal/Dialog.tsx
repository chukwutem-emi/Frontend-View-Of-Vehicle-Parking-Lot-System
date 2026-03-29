import type {DialogAttributes} from "../../types/dialog";

export const Dialog = ({isOpen, title, message, onConfirm, onCancel, divOnCancel}: DialogAttributes) => {
    if (!isOpen) return null;
    return (
        <div className="w-full fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={divOnCancel}>
            <div className="bg-white w-[70%] xl:w-[30%] p-6 rounded shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <p className="text-gray-700 mb-6 text-lg">{message}</p>
                <div className="flex justify-end gap-3">
                    <button onClick={onCancel} className="px-2 py-1 font-sans text-white rounded bg-red-600 hover:bg-red-400 text-sm xl:text-lg">
                        CANCEL
                    </button>
                    <button onClick={onConfirm} className="px-2 py-1 font-sans rounded text-white bg-green-800 hover:bg-green-600 text-sm xl:text-lg">
                        CONFIRM
                    </button>
                </div>
            </div>
        </div>
    );
};