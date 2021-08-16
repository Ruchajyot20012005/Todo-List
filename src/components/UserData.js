import React from "react";
import "./UserData.css";
import UsersList from "./UsersList";
import UserInfo from "./UserInfo";

function UserData() {
  return (
    <div className="user__data">
      <UsersList />
      <UserInfo />
    </div>
  );
}

export default UserData;
