import { Seperator } from "../Seperator";
const Card = ({
  title,
  subTitle = null,
  text = null,
  rightContent = null,
  footerLeftContent = null,
  footerRightContent = null,
  seperator = false,
}) => {
  return (
    <div
      className="w-100 rounded-lg my-3 px-5 pt-4 pb-2 shadow-md cursor-pointer 
                            hover:shadow-xl"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-row">
          <div className={`${rightContent ? "w-3/5" : ""}`}>
            <div className="flex flex-col">
              <div className="font-medium text-grey-100 pb-2">{title}</div>
              <div className="text-xs text-grey-200 pb-1">{subTitle}</div>
              {text && <div className="text-sm text-grey-200 h-12">{text}</div>}
            </div>
          </div>
          <div className={`${rightContent ? "w-2/5" : ""}`}>{rightContent}</div>
        </div>
        <div className={`${rightContent ? "flex-end" : ""}`}>
          {seperator && <Seperator />}
          <div className="py-2 text-sm text-grey-200 flex justify-between items-center">
            {footerLeftContent}
            {footerRightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
