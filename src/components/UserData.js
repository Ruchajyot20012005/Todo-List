import React from "react";
import "./UserData.css";
import UserInfo from "./UserInfo";
import UsersList from "./UsersList";

function UserData() {
  return (
    <div className="user__data">
      <UsersList />
      <UserInfo />
    </div>
  );
}

export default UserData;
