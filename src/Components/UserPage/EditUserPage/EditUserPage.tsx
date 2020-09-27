import React, { FC, useState } from "react";
import { Redirect } from "react-router-dom";
import { IUser } from "../../../App";

interface Props {
  editUser: (id: number, user: string, password: string, email: string) => void;
  users: IUser[];
  match: any;
}

const EditUserPage: FC<Props> = (props): JSX.Element => {
  let user = props.users[props.match.params.id - 1];
  let [validate, setValidate] = useState(false);

  let [userValue, setUserValue] = useState(user.user);
  let [userPassword, setPasswordValue] = useState(user.password);
  let [userEmail, setEmailValue] = useState(user.email);

  return (
    <div>
      {validate ? (
        <Redirect to="/" />
      ) : (
        <div>
          <input
            type="text"
            value={userValue}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setUserValue(e.currentTarget.value);
            }}
          />
          <input
            type="text"
            value={userPassword}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setPasswordValue(e.currentTarget.value);
            }}
          />
          <input
            type="email"
            value={userEmail}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEmailValue(e.currentTarget.value);
            }}
          />
          <button
            onClick={() => {
              props.editUser(user.id, userValue, userPassword, userEmail);
              setValidate(true);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditUserPage;
