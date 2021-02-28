import React, { useEffect, useState } from "react";
import Add from "../Add/Add";
import User from "../User/User";
import "./Users.css";
import fakeData from '../../fakeData/data.json';

const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const [add, setAdd] = useState([]);
    const handleAdd = (user) => {
        setAdd([...add, user])
    }
    // console.log(usersData);
    useEffect(() => {
        setUsersData(fakeData);
    },[])
  return (
    <div>
      <h1 className="users-area-title">Find Your Friends Here</h1>
      <div className="users">
        <div className="users-data">
          {usersData.map(user => <User handleAdd={handleAdd} key={user.id} usersData={user}/>)}
        </div>
        <div className="add">
          <Add add={add}/>
        </div>
      </div>
    </div>
  );
};

export default Users;
