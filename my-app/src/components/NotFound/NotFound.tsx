import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <h1 className={classes.error}>{"User is not found!"}</h1>
      <p>{'use "Reset" button to reset filters'}</p>
    </>
  );
};

export default NotFound;
