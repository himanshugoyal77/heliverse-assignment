import axios from "axios";
import React, { useEffect } from "react";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://heliverse-assignment-production.up.railway.app/api/users",
        {
          withCredentials: false,
        }
      );
      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, []);
  return <div className="bg-[#32353F] h-full flex-grow text-white">Users</div>;
};

export default Users;
