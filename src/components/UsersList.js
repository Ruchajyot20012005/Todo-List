import React from "react";
import Header from "./Header";
import UserTable from "./UserTable";
import "./UsersList.css";
import { useState } from "react";

function UsersList() {
  const [data, setData] = useState("");
  return (
    <div className="User__list">
      <Header searchData={(search) => setData(search)} />
      <UserTable data={data} />
    </div>
  );
}

export default UsersList;
