import { useEffect, useState } from "react";
import {MdMenu} from "react-icons/md";
import { fetchStatistics } from "../../features/parkingSession/APIs/parkingStatsAPI";
import {getParkingSlotAPI} from "../../features/parkingSlot/APIs/dashboardParkingSlotAPI";
import {useSelector} from "react-redux";
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




  const userToken = useSelector((store: any) => store.token?.getToken);
  const userDetails = useSelector((store: any) => store.userDetails?.getUserDetails);

  const role = userDetails?.userRole;
  const username = userDetails?.username ?? "";
  const firstTwoLetters = username.substring(0, 2);

  
  const clearMessage = () => {
      setMessage("");
      setErrMessage(false);
    };
  const getStatistics = async () => {
    try {
      const {data, status} = await fetchStatistics(userToken);
      if (status === 200) {
        setChartData(data?.data ?? []);
        setMessage("Parking session statistics fetched successfully.");
        setErrMessage(false);
      } else {
        const [key] = Object.keys(data);
        setMessage(data[key ?? "An error occurred."]);
        setErrMessage(true);
      }
    } catch (err: any) {
      console.log("ERROR:", err.message);
      setChartData([]);
    }
  };
  
  const getSlots = async () => {
    try {
      const {data, status} = await getParkingSlotAPI(userToken);
      if (status === 200) {
        setSlots(data?.data ?? []);
        setMessage("Parking Slots fetched successfully.");
        setErrMessage(false);
      } else {
        const [key] = Object.keys(data);
        setMessage(data[key ?? "An error occurred."]);
        setErrMessage(true)
      };
    } catch (err: any) {
      console.log("ERROR:", err.message);
      setSlots([]);
    }
  };
  const getSessions = async () => {
    try {
      const {data, status} = await dashboardParkingSessionsAPI(userToken);
      if (status === 200) {
        setParkingSessions(data?.data ?? []);
        setMessage(data?.message);
        setErrMessage(false);
      } else {
        const [key] = Object.keys(data);
        setMessage(data[key ?? "An error occurred."])
        setErrMessage(true);
      };
    } catch (err: any) {
      console.log("ERROR:", err.message);
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
    }, 4000);
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
        <div className={`flex flex-col md:flex-row h-screen w-full mt-[3rem] md:mt-[4rem] ${isDarkMode ? "bg-[#0B0F2A] text-white": "bg-gray-100 text-black overflow-x-hidden"}`}>
          {/* Sidebar */}
          {/* Desktop */}
          <div className="hidden md:block w-64">
            <SideBar active={active} setActive={setActive} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          </div>
          {/* Mobile */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsSideBarOpen(true)}>
            <MdMenu size={40}/>
          </button>
          {
            isSideBarOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsSideBarOpen(false)}/>
              <div className="absolute top-0 left-0 w-64 bg-[#0B0F2A] h-full" onClick={(e) => e.stopPropagation()}>
                <SideBar active={active} setActive={setActive} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
              </div>
            </div>
            )
          }
          {/* Main */}
          <main className="flex-1 p-4 md:p-6 overflow-y-auto overflow-x-hidden">
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