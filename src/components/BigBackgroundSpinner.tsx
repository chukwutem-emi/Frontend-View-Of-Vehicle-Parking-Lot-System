

export const BigBackgroundSpinner = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="w-10 h-10 border-4 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
    );
};