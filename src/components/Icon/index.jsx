import { useState } from "react";

export const Icon = ({ size, color, ShowIcon, HoverIcon }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <HoverIcon size={size} color={color} />
      ) : (
        <ShowIcon size={size} color={color} />
      )}
    </div>
  );
};
