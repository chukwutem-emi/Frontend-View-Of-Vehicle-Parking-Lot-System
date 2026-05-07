import { useEffect, type ReactNode } from "react";
import { useParams } from "react-router";
import { useGetParkingSlot } from "../hooks/useGetParkingSlot";
import { GetParkingSlot } from "../components/GetParkingSlot";


const GetParkingSlotPage = (): ReactNode => {
    const {vehicleTypeId} = useParams();

    const vehicleId = Number(vehicleTypeId);
    const validId   = vehicleTypeId && !isNaN(vehicleId);

    const {
        clearMessage,
        errMessage,
        handleGetParkingSlot : handleGetParkingSlotWithId,
        message,
        open,
        openMessage,
        progress,
        setOpenMessage,
        slot
    } = useGetParkingSlot();

    useEffect(() => {
        if (validId) {
            handleGetParkingSlotWithId(vehicleId);
        };
    }, [validId]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const handleOnclick = () => {
        clearMessage();
        setOpenMessage(false);
    };

  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <GetParkingSlot 
        errMessage={errMessage}
        handleDivOnClick={handleOnclick}
        handleOnclick={handleOnclick}
        message={message}
        open={open}
        openMessage={openMessage}
        progress={progress}
        slot={slot}
      />
    </div>
  )
};
export default GetParkingSlotPage;