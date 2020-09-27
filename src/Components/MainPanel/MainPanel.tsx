import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../App";
import style from "./MainPanel.module.css";
interface Props {
  users: Array<IUser>;
  deleteUser: (id: number) => void;
}
const MainPanel: FC<Props> = (props) => {
  const onDeleteUser = (id: number) => {
    props.deleteUser(id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr className={style.panel}>
            <th>Id</th>
            <th>User</th>
            <th>Password</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Destroy</th>
          </tr>
        </thead>

        <tbody>
          {props.users.map((user) => {
            return (
              <tr key={user.id}>
                <td className={style.userLine}>{user.id}</td>
                <td className={style.userLine}>{user.user}</td>
                <td className={style.userLine}>{user.password}</td>
                <td className={style.userLine}>{user.email}</td>
                <td className={style.userLine}>
                  <Link to={`/user/${user.id}`}>View profile</Link>
                </td>
                <td className={style.userLine}>
                  <a
                    className={style.button25}
                    onClick={() => {
                      onDeleteUser(user.id);
                    }}
                  >
                    X
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainPanel;
