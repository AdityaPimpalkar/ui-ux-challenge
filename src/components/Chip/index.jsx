export const Chip = ({ text, accent }) => {
  return (
    <div
      className={`p-2 border rounded-lg text-center text-xs font-medium 
    ${accent === "grey" ? "bg-blue-300 border-blue-100" : ""}
    ${accent === "purple" ? "bg-purple-200 border-purple-100" : ""}
    `}
    >
      {text}
    </div>
  );
};
