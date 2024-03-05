import { ReactNode } from "react";
import classes from "./ResetButton.module.css";

type buttonProps = {
  children: ReactNode;
  handle: () => void;
};

const ResetButton: React.FC<buttonProps> = ({ children, handle }) => {
  return (
    <button className={classes.btn} onClick={handle}>
      {children}
    </button>
  );
};

export default ResetButton;
