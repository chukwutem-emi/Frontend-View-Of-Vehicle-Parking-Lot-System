import type React from "react";
import type { PaginationAttributes } from "../../../types/paginationAttributes";
import type { ReactNode } from "react";

type PaginationProps = {
    pagination    : PaginationAttributes;
    setPagination : React.Dispatch<React.SetStateAction<PaginationAttributes>>;
};

export const Pagination = ({pagination, setPagination}: PaginationProps): ReactNode => {
    return (
        <div className="flex gap-6 mt-20  text-center justify-center text-white">
            <button
            disabled={pagination.currentPage === 1}
            onClick={() => 
                setPagination((prev) => ({
                    ...prev,
                    currentPage: prev.currentPage - 1
                }))
            }
            className={`bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-300 font-sans font-semibold ${pagination.currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
                Prev
            </button>
            <span className="text-black font-semibold font-sans">
                page {pagination.currentPage} 0f {pagination.totalPages}
            </span>
            <button
            disabled={pagination.currentPage === pagination.totalPages}
            onClick={() =>
                setPagination((prev) => ({
                    ...prev,
                    currentPage: prev.currentPage + 1
                }))
            }
            className={`bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-400 font-sans font-semibold ${pagination.currentPage === pagination.totalPages ? "cursor-not-allowed": "cursor-pointer"}`}
            >
                Next
            </button>
        </div>
    );
};
