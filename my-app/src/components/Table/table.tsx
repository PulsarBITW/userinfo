import ImgTd from "../ImgTd/ImgTd";
import classes from "./table.module.css";

interface TableProps {
  users: Array<any>;
}

const Table: React.FC<TableProps> = ({ users }) => {
  const handleMouseOver: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    console.log(e.target);
  };
  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <td>name</td>
          <td>picture</td>
          <td>location</td>
          <td>email</td>
          <td>phone</td>
          <td>registered date</td>
        </tr>
        {users.map((el: any) => {
          return (
            <tr key={el.login.uuid}>
              <td>{`${el.name.first} ${el.name.last}`}</td>

              <ImgTd
                thumbnail={el.picture.thumbnail}
                pictureLarge={el.picture.large}
              />
              {/* <img src={el.picture.thumbnail} onMouseOver={handleMouseOver} />
                <span className={classes.tooltip}>
                  <img src={el.picture.large} />
                </span> */}

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
};

export default Table;
