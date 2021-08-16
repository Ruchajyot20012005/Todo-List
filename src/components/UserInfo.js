import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/users/usersActions";
import "./UserInfo.css";

function UserInfo() {
  // const userDatai = useSelector((state) => (state = state.useri));
  // const dispatchi = useDispatch();

  // useEffect((e) => {
  //   dispatchi(fetchUsers());
  // }, []);
  // console.log(userDatai);

  return (
    <div className="outer__block">
      <div className="user__info">
        <h2>User Details</h2>
        <h5>Search for the users from given list</h5>
        <div className="details">
          <div className="datails__cell">
            <p>Todo ID</p>
            <p>1</p>
          </div>
          <div className="datails__cell">
            <p>Todo title</p>
            <p>Meeting at 9</p>
          </div>
          <div className="datails__cell">
            <p>User ID</p>
            <p>1</p>
          </div>
          <div className="datails__cell">
            <p>Name</p>
            <p>Darken</p>
          </div>
          <div className="datails__cell">
            <p>Email</p>
            <p>darken@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
