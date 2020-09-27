import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPanel from "./Components/MainPanel/MainPanel";
import style from "./App.module.css";
import CreateNewUserForm from "./Components/CreateNewUserForm/CreateNewUserForm";
import UserPage from "./Components/UserPage/UserPage";
import EditUserPage from "./Components/UserPage/EditUserPage/EditUserPage";
export interface IUser {
  id: number;
  user: string;
  password: string;
  email: string;
}
function App(): JSX.Element {
  let user = {
    id: 1,
    user: "Arsmedj",
    password: "11122003",
    email: "arsmedj@gmail.com",
  };
  let [users, setUsers] = useState([user]);
  const submit = (user: IUser) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };
  const editUser = (
    id: number,
    userValue: string,
    passwordValue: string,
    emailValue: string
  ) => {
    let newArr = users.filter((user) => {
      if (user.id === id) {
        user.user = userValue;
        user.password = passwordValue;
        user.email = emailValue;
        return user;
      }
    });
    setUsers(newArr);
  };
  const deleteUser = (id: number) => {
    let newArr = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newArr);
  };
  return (
    <div className={style.container}>
      <Router>
        <Route exact path="/">
          <MainPanel deleteUser={deleteUser} users={users} />
          <Link className={style.createBtn} to="/create_user">
            Create new User
          </Link>
        </Route>
        <Switch>
          <Route
            path="/create_user"
            render={(props) => {
              return (
                <CreateNewUserForm users={users} {...props} submit={submit} />
              );
            }}
          />
          <Route
            path={`/user/:id`}
            render={(props) => {
              return <UserPage editUser={editUser} users={users} {...props} />;
            }}
          ></Route>
          <Route
            path={`/edit/:id`}
            render={(props) => {
              return (
                <EditUserPage editUser={editUser} users={users} {...props} />
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
