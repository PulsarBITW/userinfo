import classes from "./table.module.css";

function Table({ users }: any) {
  console.log("table", users);
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
              <td>
                <img src={el.picture.thumbnail} />
              </td>
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
}

export default Table;

const date = new Date();
