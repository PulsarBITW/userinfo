import { memo } from "react";
import { resultUser } from "../../Types/types";
import ImgTd from "../ImgTd/ImgTd";

import classes from "./table.module.css";

type tableProps = {
  users: resultUser[];
};

const Table = memo(({ users }: tableProps) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <td className={classes.name}>
            <h2>{"name"}</h2>
          </td>
          <td>
            <h2 className={classes.name}>{"picture"}</h2>
          </td>
          <td>
            <h2 className={classes.name}>{"location"}</h2>
          </td>
          <td>
            <h2 className={classes.name}>{"email"}</h2>
          </td>
          <td>
            <h2 className={classes.name}>{"phone"}</h2>
          </td>
          <td>
            <h2 className={classes.name}>{"registered date"}</h2>
          </td>
        </tr>
      </thead>
      <tbody>
        {users.map((el: resultUser) => {
          return (
            <tr key={el.login.uuid}>
              <td>{`${el.name.first} ${el.name.last}`}</td>
              <ImgTd
                thumbnail={el.picture.thumbnail}
                pictureLarge={el.picture.large}
              />
              <td>{`${el.location.state}/${el.location.city}`}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
              <td>
                {new Date(`${el.registered.date}`).toLocaleDateString("ru-RU", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

export default Table;
