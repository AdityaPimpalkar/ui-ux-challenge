export const ListingFooter = ({
  pageNumber,
  noOfListings,
  totalCount,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="flex justify-between my-5 items-center">
      <span className="text-sm">
        Showing {pageNumber}-{noOfListings} of {totalCount}
      </span>
      <div className="flex gap-2">
        <button
          className={`text-sm hover:shadow-md font-semibold border border-grey-300 px-5 py-2 rounded-lg 
                    ${
                      pageNumber === 1
                        ? "text-grey-200 disabled:pointer-events-none cursor-not-allowed"
                        : ""
                    }`}
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
        >
          Previous
        </button>
        <button
          className="text-sm hover:shadow-lg font-semibold border border-grey-300 px-5 py-2 rounded-lg"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};
