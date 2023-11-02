export const Chip = ({ text, accent }) => {
  return (
    <div
      className={`py-2 px-1 border rounded-lg text-center text-xs font-medium md:py-2 lg:text-sm 2xl:text-base
    ${accent === "grey" ? "bg-blue-300 border-blue-100" : ""}
    ${accent === "purple" ? "bg-purple-200 border-purple-100" : ""}
    `}
    >
      {text}
    </div>
  );
};
