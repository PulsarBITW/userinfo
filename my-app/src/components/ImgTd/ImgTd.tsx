import { useRef, memo } from "react";

import classes from "./ImgTd.module.css";

type ImgTdProps = {
  thumbnail: string;
  pictureLarge: string;
};

// we use memo to avoid rerenders
const ImgTd = memo(({ thumbnail, pictureLarge }: ImgTdProps) => {
  console.log("render imgTd");

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
});

export default ImgTd;
