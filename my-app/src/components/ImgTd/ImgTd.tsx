import { useState, useRef, RefObject } from "react";
import classes from "./ImgTd.module.css";

interface ImgTdProps {
  thumbnail: string;
  pictureLarge: string;
}

const ImgTd: React.FC<ImgTdProps> = ({ thumbnail, pictureLarge }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMouseOver: React.MouseEventHandler<HTMLImageElement> = () => {
    if (ref.current) ref.current.className = classes.tooltipActive;
  };

  const handleMouseOut: React.MouseEventHandler<HTMLImageElement> = () => {
    if (ref.current) ref.current.className = classes.tooltipNone;
  };

  return (
    <td className={classes.tooltipContainer}>
      <div className={classes.wrappImg}>
        <img
          className={classes.thumbnail}
          src={thumbnail}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          alt="user-thumbnail"
        />
        <span ref={ref} className={classes.tooltipNone}>
          <img className={classes.large} src={pictureLarge} alt="user-large" />
        </span>
      </div>
    </td>
  );
};

export default ImgTd;
