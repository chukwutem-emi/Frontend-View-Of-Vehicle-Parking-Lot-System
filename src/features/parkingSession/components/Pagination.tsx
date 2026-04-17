import type { JSX } from "react";
import type { PaginationAttributes } from "../../../types/paginationAttributes";
import type React from "react";

type ParkingSessionProps = {
    pagination    : PaginationAttributes;
    setPagination : React.Dispatch<React.SetStateAction<PaginationAttributes>>
};


export const ParkingSessionPagination = ({pagination, setPagination}: ParkingSessionProps): JSX.Element => {
    return (
        <div className="flex gap-6 mt-20 text-center justify-center text-white">
            <button
                className={`bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-300 font-sans font-semibold ${pagination.currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
                disabled={pagination.currentPage === 1}
                onClick={() => 
                    setPagination((prev) => ({
                        ...prev,
                        currentPage: prev.currentPage - 1
                    }))
                }
            >
                Prev
            </button>
            <span className="text-black font-semibold font-sans">
                page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <button
                className={`bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-400 font-sans font-semibold ${pagination.currentPage === pagination.totalPages ? "cursor-not-allowed": "cursor-pointer"}`}
                disabled={pagination.currentPage === pagination.totalPages}
                onClick={() => 
                    setPagination((prev) => ({
                        ...prev,
                        currentPage: prev.currentPage + 1
                    }))
                }
            >
                Next
            </button>
        </div>
    );
};