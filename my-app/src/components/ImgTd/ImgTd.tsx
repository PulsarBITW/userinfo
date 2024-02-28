import React, { useState } from "react";
import classes from "./ImgTd.module.css";

interface ImgTdProps {
  thumbnail: string;
  pictureLarge: string;
}

const ImgTd: React.FC<ImgTdProps> = ({ thumbnail, pictureLarge }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver: React.MouseEventHandler<HTMLImageElement> = (e) => {
    setIsActive(true);
  };
  const handleMouseOut = () => {
    setIsActive(false);
  };
  return (
    <td className={classes.tooltipContainer}>
      <div className={classes.wrappImg}>
        <img
          className={classes.thumbnail}
          src={thumbnail}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <span
          className={isActive ? classes.tooltipActive : classes.tooltipNone}
        >
          <img className={classes.large} src={pictureLarge} />
        </span>
      </div>
    </td>
  );
};

export default ImgTd;
