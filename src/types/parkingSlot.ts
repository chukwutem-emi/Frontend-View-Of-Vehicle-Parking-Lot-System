

export interface ParkingSlotAttributes {
    id?                : number;
    slotCode           : string;
    isAvailable?       : boolean;
    maximumCapacity?   : number;
    availableCapacity? : number;
    updatedBy?         : string;
    vehicleTypeId?     : number;
};
