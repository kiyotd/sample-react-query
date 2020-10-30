import React, { useEffect, useState } from "react";
/* lib */
import axios from "axios";
import { useQuery } from "react-query";
/* types */
import { User } from "./types";

function App() {

  const [users, setUsers] = useState([]);

  const {isLoading, isError, data} = useQuery("users", () => {
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
  });

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    if (!isLoading) {
      setUsers(data);
    }

  }, [data, isLoading]);

  useEffect(() => {
    console.log(`isError: ${isError}`);
  }, [isError]);

  return (
    <div className="App">
      <h1>Users List</h1>
      {users.map((user: User) =>
        <div key={user.id}>
          <h3>name: {user.name}</h3>
          <div>username: {user.username}</div>
          <div>phone: {user.phone}</div>
          <div>website: {user.website}</div>
        </div>
      )}
    </div>
  );

}

export default App;
