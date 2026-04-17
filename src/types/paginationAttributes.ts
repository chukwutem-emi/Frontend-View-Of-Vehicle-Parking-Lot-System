

export interface PaginationAttributes {
    currentPage    : number;
    limit          : number;
    total          : number;
    totalPages     : number;
    sort           : string;
    role?          : string;
    vehicleTypeId? : number;
};