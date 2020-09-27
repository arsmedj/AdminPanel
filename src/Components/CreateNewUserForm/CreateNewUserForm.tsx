import React, { useState, useRef, FC } from "react";
import style from "./CreateNewUserForm.module.css";
import { IUser } from "../../App";
import { Redirect } from "react-router-dom";
interface Props {
  users: Array<IUser>;
  submit: (user: IUser) => void;
}

const CreateNewUserForm: FC<Props> = (props): JSX.Element => {
  let [validate, setValidate] = useState(false);
  let [userValue, setUserValue] = useState("");
  let [passwordValue, setPasswordValue] = useState("");
  let [emailValue, setEmailValue] = useState("");

  const onSubmitHandler = () => {
    let newUser = {
      id: props.users.length + 1,
      user: userValue,
      password: passwordValue,
      email: emailValue,
    };
    if (userValue !== "" && passwordValue !== "" && emailValue !== "") {
      props.submit(newUser);
      setValidate(true);
    }
  };

  return (
    <div>
      {validate ? (
        <Redirect to={"/"} />
      ) : (
        <div>
          <div className={style.group}>
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setUserValue(e.currentTarget.value);
              }}
              value={userValue}
              type="text"
              placeholder="username"
            />
            <span className={style.bar}></span>
            <label>User</label>
          </div>
          <div className={style.group}>
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setPasswordValue(e.currentTarget.value);
              }}
              value={passwordValue}
              type="password"
              placeholder="password"
            />
            <span className={style.bar}></span>
            <label>Password</label>
          </div>
          <div className={style.group}>
            <input
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setEmailValue(e.currentTarget.value);
              }}
              value={emailValue}
              type="email"
              placeholder="email"
            />
            <span className={style.bar}></span>
            <label>Email</label>
          </div>

          <button onClick={onSubmitHandler}>Create user</button>
        </div>
      )}
    </div>
  );
};

export default CreateNewUserForm;
