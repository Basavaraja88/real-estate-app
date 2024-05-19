import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <nav>
      <ul className="flex items-center justify-center space-x-2 mt-10">
        <li
          className={`inline-block mx-1 px-3 py-2 rounded-lg cursor-pointer ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500"
              : "bg-gray-200 text-gray-700"
          }`}
          //   onClick={() => handlePageChange(currentPage - 1)}
        >
          {"<"}
        </li>
        <div className="flex justify-center ">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handleClick(page)}
                className={`${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } font-bold py-2 px-4 mx-1 rounded`}
              >
                {page}
              </button>
            )
          )}
        </div>
        <li
          className={`inline-block mx-1 px-3 py-2 rounded-lg cursor-pointer ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500"
              : "bg-gray-200 text-gray-700"
          }`}
          //   onClick={() => handlePageChange(currentPage + 1)}
        >
          {">"}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
