import {useState} from 'react';
import {LoginPage} from "./LoginPage";
import {SignUpPage} from "./SignUpPage";

const CombinedAuth = () => {
    const [isSignUp, setIsSignUp] = useState(false);


    return (
        <div className="min-h-screen w-full flex flex-col items-stretch justify-center px-4 overflow-x-hidden">
            <div className="w-full min-h-full bg-blue-950 rounded-lg p-6">
                {
                    isSignUp ? <SignUpPage/> : <LoginPage/>
                }
            </div>
            <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="w-full text-sm xl:text-lg p-6 text-yellow-600 hover:underline outline-none font-sans font-bold"
            >
                {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign up"}
            </button>
        </div>
    );
};
export default CombinedAuth;