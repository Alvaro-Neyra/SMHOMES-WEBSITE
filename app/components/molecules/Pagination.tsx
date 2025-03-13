import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setPage }) => {
    const maxVisibleButtons = 5;
    const buttons = [];

    buttons.push(
        <button
            key="first"
            onClick={() => setPage(1)}
            className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw] rounded-md ${currentPage === 1
                ? 'bg-primaryBackground text-white'
                : 'bg-gray-30 hover:bg-blackSoft30'
                }`}
        >
            1
        </button>
    );

    if (totalPages > maxVisibleButtons) {
        let startPage, endPage;

        if (currentPage <= 3) {
            startPage = 2;
            endPage = Math.min(startPage + maxVisibleButtons - 3, totalPages - 1);

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === i
                            ? 'bg-primaryBackground text-white'
                            : 'bg-gray-30 hover:bg-blackSoft30'
                            }`}
                    >
                        {i}
                    </button>
                );
            }

            if (endPage < totalPages - 1) {
                buttons.push(
                    <span key="ellipsis-end" className="px-2">
                        <MoreHorizontal className="w-5 h-5 text-gray-100" />
                    </span>
                );
            }
        } else if (currentPage >= totalPages - 2) {
            if (currentPage > 3) {
                buttons.push(
                    <span key="ellipsis-start" className="px-2">
                        <MoreHorizontal className="w-5 h-5 text-gray-100" />
                    </span>
                );
            }

            startPage = Math.max(totalPages - maxVisibleButtons + 2, 2);
            endPage = totalPages - 1;

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === i
                            ? 'bg-primaryBackground text-white'
                            : 'bg-gray-30 hover:bg-blackSoft30'
                            }`}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            buttons.push(
                <span key="ellipsis-start" className="px-2">
                    <MoreHorizontal className="w-5 h-5 text-gray-100" />
                </span>
            );

            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === i
                            ? 'bg-primaryBackground text-white'
                            : 'bg-gray-30 hover:bg-blackSoft30'
                            }`}
                    >
                        {i}
                    </button>
                );
            }

            buttons.push(
                <span key="ellipsis-end" className="px-2">
                    <MoreHorizontal className="w-5 h-5 text-gray-100" />
                </span>
            );
        }
    } else {
        for (let i = 2; i < totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === i
                        ? 'bg-primaryBackground text-white'
                        : 'bg-gray-30 hover:bg-blackSoft30'
                        }`}
                >
                    {i}
                </button>
            );
        }
    }

    if (totalPages > 1) {
        buttons.push(
            <button
                key="last"
                onClick={() => setPage(totalPages)}
                className={`px-4 py-2 xl:px-[1vw] xl:py[.5vw] xl:text-[1.5vw]  rounded-md ${currentPage === totalPages
                    ? 'bg-primaryBackground text-white'
                    : 'bg-gray-30 hover:bg-blackSoft30'
                    }`}
            >
                {totalPages}
            </button>
        );
    }

    return (
        <div className="flex justify-center mt-8 xl:mt-12 items-center">
            <button
                onClick={() => setPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 xl:p-3 rounded-md bg-gray-30 hover:bg-blackSoft30 disabled:opacity-50 disabled:cursor-not-allowed mr-2 xl:mr-4"
                aria-label="Página anterior"
            >
                <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6" />
            </button>

            <div className="flex space-x-1 xl:space-x-2">
                {buttons}
            </div>

            <button
                onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 xl:p-3 rounded-md bg-gray-30 hover:bg-blackSoft30 disabled:opacity-50 disabled:cursor-not-allowed ml-2 xl:ml-4"
                aria-label="Página siguiente"
            >
                <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6" />
            </button>
        </div>
    );
}

export default Pagination;