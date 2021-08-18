import React, { useState } from "react";
import "./UserInfo.css";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchuserId } from "../Redux/users/usersActions";

function UserInfo() {
  const userData = useSelector((state) => state.user);
  const [data1, setData] = useState({});

  const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });

  useEffect(() => {
    if (userData.userid) {
      async function fetchData() {
        const request = await instance.get("/" + userData.userid.userID);
        setData(request.data);
        return request;
      }
      fetchData();
    }
  }, [fetchuserId()]);

  return (
    <div className="outer__block">
      <div className="user__info">
        <h2>User Details</h2>
        <h5>Search for the users from given list</h5>
        <div className="details">
          <div className="datails__cell">
            <p>Todo ID :</p>
            <p>{userData.userid.todoId}</p>
          </div>
          <div className="datails__cell">
            <p>Todo title :</p>
            <p>{userData.userid.todoTitle}</p>
          </div>
          <div className="datails__cell">
            <p>User ID :</p>
            <p>{data1.id}</p>
          </div>
          <div className="datails__cell">
            <p>Name :</p>
            <p>{data1.name}</p>
          </div>
          <div className="datails__cell">
            <p>Email :</p>
            <p>{data1.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
