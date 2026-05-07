import type { ReactNode } from "react";
import { useGetAllParkingSlots } from "../hooks/useGetAllParkingSlots";
import { GetAllParkingSlot } from "../components/GetAllParkingSlots";



const GetAllParkingSlotPage = (): ReactNode => {
    const {
        errMessage,
        message,
        open,
        openMessage,
        pagination,
        progress,
        slots,
        setOpenMessage,
        setPagination,
        clearMessage
    } = useGetAllParkingSlots();

    const handleOnclick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    return (
        <div className="overflow-x-hidden overflow-y-auto">
            <GetAllParkingSlot 
                errMessage={errMessage}
                handleDivOnClick={handleOnclick}
                handleOnclick={handleOnclick}
                message={message}
                open={open}
                openMessage={openMessage}
                pagination={pagination}
                progress={progress}
                setPagination={setPagination}
                slots={slots}
            />
        </div>
    );
};
export default GetAllParkingSlotPage;