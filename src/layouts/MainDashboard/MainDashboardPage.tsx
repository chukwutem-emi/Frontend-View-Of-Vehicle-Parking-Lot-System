import { useEffect, useState } from "react";
import {MdMenu} from "react-icons/md";
import { fetchStatistics } from "../../features/parkingSession/APIs/parkingStatsAPI";
import {getDashboardParkingSlotAPI} from "../../features/parkingSlot/APIs/dashboardParkingSlotAPI";
import {SideBar} from "./SideBar";
import {NavBar} from "./NavBar";
import {Statistics} from "./Statistics";
import {ChartAndOverview} from "./ChartAndOverview";
import {dashboardParkingSessionsAPI} from "../../features/parkingSession/APIs/dashboardParkingSessionAPI";
import type {ParkingSlotAttributes} from "../../types/parkingSlot";
import type {GetAllParkingSessionsAttributes} from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import {ParkingSessionsActivityTable} from "./ParkingSessionsActivityTable";
import {ShimmerUI} from "../../utils/ShimmerUI";
import {ResponseDialog} from "../../components/Modal/ResponseDialog";
import { useAppSelector } from "../../utils/useAppSelector";
import { SunIcon, MoonIcon } from "lucide-react";




const ParkingDashboard = () => {
  const[chartData, setChartData]               = useState([]);
  const[slots, setSlots]                       = useState<ParkingSlotAttributes[]>([]);
  const[active, setActive]                     = useState("Dashboard");
  const[isSideBarOpen, setIsSideBarOpen]       = useState(false);
  const[parkingSessions, setParkingSessions]   = useState<GetAllParkingSessionsAttributes>([]);
  const[shimmerUILoading, setShimmerUILoading] = useState(true);
  const[message, setMessage]                   = useState("");
  const[errMessage, setErrMessage]             = useState(false);
  const[open, setOpen]                         = useState(false);
  const[isDarkMode, setIsDarkMode]             = useState(true);




  const userToken = useAppSelector((state) => state.auth.token);
  const userDetails = useAppSelector((state) => state.user.details);

  const role = userDetails?.userRole;
  const username = userDetails?.username ?? "";
  const firstTwoLetters = username.substring(0, 2);

  
  const clearMessage = () => {
      setMessage("");
      setErrMessage(false);
    };
  const getStatistics = async () => {
    try {
      const res = await fetchStatistics(userToken);
      if (!res.data.success) {
        setMessage(res.data.message);
        setErrMessage(true);
        return;
      };
      setChartData(res.data.data ?? []);
      setMessage(res.data.message);
      setErrMessage(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log({
          Error : err.message,
          Cause : err.cause
        });
      };
      setChartData([]);
    }
  };
  
  const getSlots = async () => {
    try {
      const res = await getDashboardParkingSlotAPI(userToken);
      if (!res.data.success) {
        setMessage(res.data.message);
        setErrMessage(true);
        return;
      };
      setSlots(res.data.data ?? []);
      setMessage("Parking Slots fetched successfully.");
      setErrMessage(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log({
          ERROR : err.message,
          CAUSE : err.cause
        });
      };
      setSlots([]);
    }
  };
  const getSessions = async () => {
    try {
      const res = await dashboardParkingSessionsAPI(userToken);
      if (!res.data.success) {
        setMessage(res.data.message)
        setErrMessage(true);
        return;
      };
      setParkingSessions(res.data.data ?? []);
      setMessage(res.data.message);
      setErrMessage(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log({
          err : err.message,
          cause : err.cause
        });
      };
      setParkingSessions([]);
    }
  };
  
  useEffect(() => {
    getStatistics();
    getSlots();
    getSessions();
    const interval = setInterval(() => {
        getSlots();
        getStatistics();
        getSessions();
    }, 1800000);
    if (message) {
      setOpen(true);
    };
    const timer = setTimeout(() => {
      setShimmerUILoading(false);
    }, 1000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    } 
      
  }, []);

    const handleDivClick = () => {
        clearMessage();
        setOpen(false);
    };
    const handleOnClick = () => {
        clearMessage();
        setOpen(false);
    };

  return (
    <>
      {
        shimmerUILoading ? (
          <ShimmerUI />
        ): (
        <div className={`flex flex-col md:flex-row h-screen w-full md:mt-[4rem] ${isDarkMode ? "bg-[#0B0F2A] text-white": "bg-gray-200 text-black overflow-x-hidden"}`}>
          {/* Mobile */}
          <button className="md:hidden p-2 w-fit text-white" onClick={() => setIsSideBarOpen(true)}>
            <MdMenu size={40}/>
          </button>
          {
            isSideBarOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsSideBarOpen(false)}/>
              <div className="absolute top-0 left-0 w-64 bg-[#0B0F2A] h-full" onClick={(e) => e.stopPropagation()}>
                <SideBar active={active} setActive={setActive} isDarkMode={isDarkMode} />
              </div>
            </div>
            )
          }
          {/* Main */}
          <main className="flex-1 px-4 md:px-6 overflow-x-hidden">
            <button className="rounded-lg my-6 text-white" onClick={() => setIsDarkMode(!isDarkMode)}>
              {
                isDarkMode ?  <MoonIcon size={40} className="text-white"/> : <SunIcon size={40} className="text-yellow-600"/>
              }
            </button>
            {/* Navbar */}
            <NavBar role={role} isDarkMode={isDarkMode}firstTwoLetters={firstTwoLetters} />
            {/* Stats */}
            <Statistics isDarkMode={isDarkMode} parkingSessions={parkingSessions} />

            {/* Chart + Overview */}
            <ChartAndOverview chartData={chartData} slots={slots} isDarkMode={isDarkMode} parkingSessions={parkingSessions} />

            {/* Table */}
            <ParkingSessionsActivityTable parkingSessions={parkingSessions} isDarkMode={isDarkMode} />
          </main>
          <ResponseDialog divOnClick={handleDivClick} errMessage={errMessage} isOpen={open} message={message} onClick={handleOnClick} />
        </div>
        )
      }
    </>
  );
};
export default ParkingDashboard;