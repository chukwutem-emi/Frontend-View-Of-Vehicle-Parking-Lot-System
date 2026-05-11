
type LoaderAttributes = {
    progress : number;
    isOpen   : boolean; 
};

export const Loader = ({progress, isOpen}: LoaderAttributes) => {
    if (!isOpen) return null;
    return (
        <div className="w-full fixed inset-0 bg-black/50 flex items-center justify-center z-30">
            <div className="md:w-[50%] w-[80%] bg-white z-30 p-4 flex flex-col item-center space-y-4">
                <div className="w-full h-2 bg-gray-400 rounded">
                    <div className="bg-green-600 h-2 rounded transition-all duration-300" style={{width: `${progress}%`}}></div>
                </div>
                <div className="px-3 py-1 rounded-full text-blue-600 font-bold text-lg text-center">{progress}%</div>
            </div>
        </div>
    );
};