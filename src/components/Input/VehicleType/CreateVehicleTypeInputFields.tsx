import type { ReactNode } from "react";
import type {VehicleTypeInputFieldsAttributes} from "../../../types/vehicleTypeAttributes/vehicleTypeInputFieldsAttributes";


export const CreateVehicleTypeInputFields = ({label, autoComplete, id, inputRef, inputType, name, placeholder}:VehicleTypeInputFieldsAttributes): ReactNode => {
    return (
        <>
        <label htmlFor={id} className="text-black font-sans font-semibold xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">{label}</label>
        <input
            id={id}
            name={name}
            type={inputType}
            ref={inputRef}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required
            autoCorrect="on"
            className="font-sans p-2 text-black outline-none border-[1px] border-black xs:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.1rem]"
        />
        </>
    );
};