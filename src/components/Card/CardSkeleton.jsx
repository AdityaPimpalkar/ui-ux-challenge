import { Seperator } from "../Seperator";
export const CardSkeleton = () => {
  return (
    <div
      className="w-100 rounded-lg my-3 px-5 pt-4 pb-2 shadow-md cursor-pointer bg-white-100
                            hover:shadow-xl animate-pulse"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-row">
          <div className="w-3/5">
            <div className="flex flex-col">
              <div className="font-medium rounded-md text-sm text-opacity-0 bg-grey-300 text-grey-300 px-2 mb-2 lg:text-base xl:text-lg 2xl:text-2xl">
                Loading..
              </div>
              <div className="text-xs text-opacity-0 w-2/3 rounded-md text-grey-300 bg-grey-300 px-2 md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                Loading..
              </div>
              <div className="h-12 lg:text-base"></div>
            </div>
          </div>
          <div className="w-2/5"></div>
        </div>
        <div className="flex-end">
          <Seperator />
          <div className="py-2 flex justify-between items-center">
            <div className="w-12 h-7 bg-grey-300 rounded-md"></div>
            <div className="w-12 h-7 bg-grey-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
