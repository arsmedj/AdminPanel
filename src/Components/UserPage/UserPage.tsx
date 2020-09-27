import React, { FC } from "react";
import style from "./UserPage.module.css";
import { Link } from "react-router-dom";
import { IUser } from "../../App";
interface Props {
  editUser: (
    id: number,
    userValue: string,
    passwordValue: string,
    emailValue: string
  ) => void;
  users: Array<IUser>;
  match: any;
}
let user: IUser;
const UserPage: FC<Props> = (props): JSX.Element => {
  props.users.map((item) => {
    if (item.id == props.match.params.id) {
      user = item;
    }
  });

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
          </tr>
        </thead>
        <tbody>
          <tr key={user.id}>
            <td className={style.userLine}>{user.id}</td>
            <td className={style.userLine}>{user.user}</td>
            <td className={style.userLine}>{user.password}</td>
            <td className={style.userLine}>{user.email}</td>
            <td className={style.userLine}>
              <Link to={`/edit/${user.id}`}>Edit Profile</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
