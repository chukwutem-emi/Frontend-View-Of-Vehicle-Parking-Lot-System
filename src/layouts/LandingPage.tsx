import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const useLandingPageTypewriter = (fullText: string, speed: number, pauseTime: number) => {
    const[text, setText]         = useState("");
    const[index, setIndex]       = useState(0);
    const[isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (index === fullText.length) {
            setIsPaused(true);

            const pauseTimeOut = setTimeout(() => {
                setIsPaused(false);
                setIndex(0);
            }, pauseTime);
            return () => clearTimeout(pauseTimeOut);
        };

        if (isPaused) return;

        const timeOut = setTimeout(() => {
            setText(fullText.slice(0, index + 1));
            setIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeOut);

    }, [fullText, speed, pauseTime, index, isPaused]);
    return text;
};


const LandingPage = () => {
    const text = useLandingPageTypewriter(
        "Manage Parking. Track sessions. Stay in Control",
        25,
        4000
    );
    const features = [
        { id: 1, heading: "Central Dashboard", paragraph: "Get a full overview of your system instantly."},
        { id: 2, heading: "User Management",   paragraph: "Easily manage all users in one place."},
        { id: 3, heading: "Section Tracking",  paragraph: "Monitor parking sections in real time."},
        { id: 4, heading: "Slot Management",   paragraph: "Monitor and manage parking slots in real time."},
        { id: 5, heading: "Vehicle Type Management", paragraph: "Manage different vehicle types and their associated rules."},
    ];
    const features2 = [
        { id: 6, heading: "Real-Time Updates",        paragraph: "Instantly see parking activity as it happens across all sections."},
        { id: 7, heading: "Session History",          paragraph: "Track past parking sessions with detailed logs and timestamps."},
        { id: 8, heading: "Analytics & Insights",     paragraph: "Gain insights into usage patterns and optimize your parking operations."},
        { id: 9, heading: "Role-Based Access",        paragraph: "Control what different users can see and manage within the system."},
        { id: 10, heading: "Secure Authentication",   paragraph: "Protect your system with robust login and access control mechanisms."},
        { id: 11, heading: "Responsive Design",       paragraph: "Access and manage your system seamlessly on desktop and mobile devices."},
        { id: 12, heading: "Scalable Architecture",   paragraph: "Designed to handle growth from small lots to large parking facilities."},
    ];

    const benefits = [
        {
            title : "Save Time",
            desc  : "Automate parking operations and reduce manual work."
        },
        {
            title : "Full Visibility",
            desc  : "See everything happening in your parking system in real time."
        },
        {
            title: "Stay Organized",
            desc: "Manage users, vehicles, and sessions in one place."
        }
    ];
    const allFeatures = [...features, ...features2];
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white font-sans overflow-y-auto py-4 w-full">
            <section className="flex flex-row top-0 right-0 left-0 justify-between p-2">
                <h1 className="md:text-3xl text-lg font-bold">🚗ParkOps</h1>
                <div className="flex flex-row gap-4">
                    <Link to={"/auth/signup"} className="bg-blue-700 py-1 px-2 font-semibold rounded-full md:text-lg text-sm">Get Started</Link>
                    <Link to={"/auth/login"} className="font-semibold py-1 px-2 md:text-lg text-sm">Login</Link>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center md:mt-[4rem] mt-24 space-y-8">
                <h1 className="text-center mb-12 font-bold md:text-5xl text-2xl">Take Full Control of Your Parking System</h1>
                <p className="px-10 md:text-lg text-xs md:font-bold font-serif text-green-600">{text}<span className="animate-pulse font-extrabold text-lg">|</span></p>
                <p className="px-5 md:text-lg text-sm font-semibold text-gray-300">
                    Monitor parking activity in real time, manage users effortlessly,
                    and gain full control of your system — all from one powerful dashboard.
                </p>
                <Link to={"/auth/signup"} className="bg-blue-700 py-1 px-2 font-semibold md:text-lg text-sm md:w-[50%] w-[80%] text-center rounded-lg">Get Started</Link>
            </section>
            <section className="grid md:grid-cols-3 gap-8 px-10 mt-24">
                {
                    benefits.map((item, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-xl hover:scale-105 hover:z-10 transition-transform duration-300">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-gray-400 mt-2">{item.desc}</p>
                        </div>
                    ))
                }
            </section>
            <section className="px-10 mt-24 space-y-16">
                <div className="grid grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="md:text-2xl text-lg font-bold">Central Dashboard</h2>
                        <p className="text-gray-400 mt-2">
                            Get a complete overview of your parking operations at a glance.
                        </p>
                    </div>
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4 space-y-3">
                        <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                        <div className="h-3 bg-gray-700 rounded w-full"></div>
                        <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <div className="h-10 bg-gray-700 rounded"></div>
                            <div className="h-10 bg-gray-700 rounded"></div>
                            <div className="h-10 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 items-center">
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4 space-y-3">
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <div className="h-5 bg-gray-700 rounded"></div>
                            <div className="h-5 bg-gray-700 rounded"></div>
                            <div className="h-5 bg-gray-700 rounded"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <div className="h-5 bg-gray-700 rounded"></div>
                            <div className="h-5 bg-gray-700 rounded"></div>
                            <div className="h-5 bg-gray-700 rounded"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            <div className="h-5 bg-gray-700 rounded"></div>
                            <div className="h-5 bg-gray-700 rounded"></div>
                            <div className="h-5 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                    <div>
                        <h2 className="md:text-2xl text-lg font-bold">Real-Time Tracking</h2>
                        <p className="text-gray-400 mt-2">
                            Monitor parking sessions and availability instantly.
                        </p>
                    </div>
                </div>
            </section>
            <h1 className="text-center my-12 font-bold md:text-3xl text-xl">Features</h1>
            <section className="grid md:grid-cols-3 px-10 gap-8 mt-24">
                {
                    allFeatures.map((item) => (
                        <div key={`feature-${item.id}`} className="bg-gray-800/60 backdrop-blur border border-gray-700 p-6 rounded-2xl hover:scale-105 hover:z-10 transition-transform duration-300">
                            <h3 className="font-bold text-lg text-green-600">{item.heading}</h3>
                            <p className="text-gray-400 mt-2">{item.paragraph}</p>
                        </div>
                    ))
                }
            </section>
            <section className="text-center py-20">
                <h2 className="text-xl md:text-3xl font-bold">Ready to Take Control?</h2>
                <p className="text-gray-400 mt-2">Start managing your parking system in minutes.</p>
                <Link to={"/auth/signup"} className="mt-4 inline-block bg-blue-700 rounded px-6 py-2">Get Started Free</Link>
            </section>
        </div>
    );
};
export default LandingPage;