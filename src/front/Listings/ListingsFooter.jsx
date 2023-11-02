import { useState } from "react";

export const ListingFooter = ({
  noOfListings = 1,
  totalListings,
  handlePrevPage,
  handleNextPage,
}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [nextPageNumber, setNextPageNumber] = useState(noOfListings);

  const onClickPrevious = () => {
    setCurrentPageNumber(currentPageNumber - noOfListings);
    setNextPageNumber(nextPageNumber - noOfListings - 1);
    handlePrevPage();
  };

  const onClickNext = () => {
    setCurrentPageNumber(currentPageNumber + noOfListings);
    setNextPageNumber(nextPageNumber + noOfListings + 1);
    handleNextPage();
  };
  return (
    <div className="flex justify-between my-5 items-center">
      <span className="text-sm lg:text-base xl:text-lg">
        Showing {currentPageNumber}-{nextPageNumber} of {totalListings}
      </span>
      <div className="flex gap-2">
        <button
          className={`text-sm hover:shadow-md font-semibold border border-grey-300 px-5 py-2 rounded-lg lg:text-base xl:text-lg
                    ${
                      currentPageNumber === 1
                        ? "text-grey-200 disabled:pointer-events-none cursor-not-allowed"
                        : ""
                    }`}
          onClick={onClickPrevious}
          disabled={currentPageNumber === 1}
        >
          Previous
        </button>
        <button
          className={`text-sm hover:shadow-md font-semibold border border-grey-300 px-5 py-2 rounded-lg lg:text-base xl:text-lg
            ${
              currentPageNumber >= totalListings || totalListings === 0
                ? "text-grey-200 disabled:pointer-events-none cursor-not-allowed"
                : ""
            }`}
          onClick={onClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
