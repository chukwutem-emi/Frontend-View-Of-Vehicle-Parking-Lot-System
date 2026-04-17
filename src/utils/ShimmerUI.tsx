import {Line, LineChart, XAxis, Tooltip, ResponsiveContainer} from "recharts";

export const ShimmerUI = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full bg-gray-400">
            <div className="hidden md:block">
                <aside className="w-64 md:flex md:flex-col bg-gray-400 h-screen shadow-2xl p-5 justify-between animate-pulse">
                    <div>
                        <h1 className="mb-6 bg-gray-500 animate-pulse"></h1>
                        <ul className="space-y-10">
                            <li className="p-4 rounded-lg shadow bg-gray-500 animate-pulse"></li>
                            <li className="p-4 rounded-lg shadow bg-gray-500 animate-pulse"></li>
                            <li className="p-4 rounded-lg shadow bg-gray-500 animate-pulse"></li>
                            <li className="p-4 rounded-lg shadow bg-gray-500 animate-pulse"></li>
                            <li className="p-4 rounded-lg shadow bg-gray-500 animate-pulse"></li>
                        </ul>
                    </div>
                    <button className="bg-gray-500 shadow m-6 p-6 rounded-lg animate-pulse"></button>
                </aside>
            </div>
            <main className="flex-1 p-4 md:p-10 overflow-y-auto">
                <div className="flex justify-between items-center m-2">
                    <h1></h1>
                    <input placeholder="🔍" className="bg-gray-400 px-4 py-2 text-right rounded-lg outline-none w-64 shadow-2xl animate-pulse" />
                    <div className="flex items-center gap-3 bg-gray-400 animate-pulse">
                        <span className=""></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gray-400 shadow-2xl animate-pulse">
                    <p className="bg-gray-500 animate-pulse shadow p-4 m-2"></p>
                    <h2 className=""></h2>
                </div>
                <div className="p-4 rounded-xl bg-gray-400 shadow-2xl animate-pulse">
                    <p className="bg-gray-500 animate-pulse shadow p-4 m-2"></p>
                    <h2 className=""></h2>
                </div>

                <div className="p-4 rounded-xl bg-gray-400 shadow-2xl animate-pulse">
                    <p className="bg-gray-500 animate-pulse shadow p-4 m-2"></p>
                    <h2 className=""></h2>
                </div>

                <div className="p-4 rounded-xl bg-gray-400 shadow-2xl animate-pulse">
                    <p className="bg-gray-500 animate-pulse shadow p-4 m-2"></p>
                    <h2 className=""></h2>
                </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 bg-gray-400">
                    <div className="lg:col-span-2 bg-gray-400 p-4 rounded-xl shadow-2xl">
                        <h2 className="bg-gray-500 mb-4"></h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart>
                            <XAxis dataKey="date" stroke="#ccc" />
                            <Tooltip />
                            <Line type="monotone" dataKey="entries" stroke="#4F46E5" />
                            <Line type="monotone" dataKey="" stroke="#4F46E5" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    {/* Parking Slots Grid */}
                    <div className="lg:col-span-2 bg-gray-400 p-10 m-4 rounded-xl shadow-2xl animate-pulse">
                        <h2 className="bg-gray-500 p-4 m-4 animate-pulse shadow"></h2>
                        <div className="grid grid-cols-4 w-[80%] gap-3 bg-gray-500 animate-pulse shadow">
                            <div className={`p-4 rounded-xl bg-gray-400 shadow-2xl animate-pulse`}
                            >
                                <p className="bg-gray-500 animate-pulse shadow p-4 m-2"></p>
                                <p className="bg-gray-500 animate-pulse shadow p-4 m-2">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-400 p-4 rounded-xl shadow-2xl animate-pulse">
                    <h2 className="mb-4"></h2>
                    <div className="flex justify-between mb-4 w-full">
                        <div className="w-[50%]">
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        </div>
                        <div className="w-[50%]">
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4 bg-gray-400 animate-pulse shadow-2xl w-full">
                        <div className="w-[50%]">
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2bg-gray-300"></p>
                        </div>
                        <div className="w-[50%]">
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        </div>
                    </div>
                    <div className="space-y-3 animate-pulse shadow-2xl p-4">
                        <div>
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        <div className="w-full bg-gray-400 h-2 rounded">
                            <div className="bg-gray-400 h-2 rounded w-1/2"></div>
                        </div>
                        </div>
                        <div>
                        <p className="bg-gray-500 shadow animate-pulse p-4 m-2"></p>
                        <div className="w-full bg-gray-400 h-2 rounded">
                            <div className="bg-gray-400 h-2 rounded w-3/4"></div>
                        </div>
                        </div>
                    </div>
                    </div>  
                </div>
                <div className="bg-gray-400 p-4 rounded-xl shadow-2xl overflow-x-auto">
                    <h2 className="mb-4 bg-gray-500 p-4 animate-pulse"></h2>
                    <table className="min-w-full bg-gray-300 animate-pulse">
                    <thead>
                        <tr className="border-b border-gray-400">
                        <th className="bg-gray-500 shadow animate-pulse py-2"></th>
                        <th className="bg-gray-500 shadow animate-pulse"></th>
                        <th className="bg-gray-500 shadow animate-pulse"></th>
                        <th className="bg-gray-500 shadow animate-pulse"></th>
                        <th className="bg-gray-500 shadow animate-pulse"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-400">
                            <td className="py-2 bg-gray-500 shadow animate-pulse"></td>
                            <td className="bg-gray-500 shadow animate-pulse"></td>
                            <td className="bg-gray-500 shadow animate-pulse"></td>
                            <td className="bg-gray-500 shadow animate-pulse"></td>
                            <td className="bg-gray-500 shadow animate-pulse"></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};