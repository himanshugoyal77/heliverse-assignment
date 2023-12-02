import axios from "axios";
import React, { useEffect } from "react";
import UserCard from "../components/UserCard";
import Search from "../icons/Search";
import Searchbar from "../components/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { addMember, removeMember } from "../context/teamContext";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [domain, setDomain] = React.useState("");
  const [team, setTeam] = React.useState([]);

  const teamMembers = useSelector((state) => state.teamState.members);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:4000/api/users");
      const data = await response.data;
      setUsers(data.users);
    };
    getUsers();
  }, []);

  console.log(teamMembers);

  return (
    <div className="bg-[#32353F] h-full flex-grow  px-4 py-3 ">
      <Searchbar status={status} setStatus={setStatus} />
      <div className="flex items-center justify-around py-2 px-3 border border-gray-100 border-opacity-10 ">
        <span className="basis-[40%]  ml-2 flex items-center justify-start gap-3 mx-3 ">
          <input
            type="checkbox"
            className="mr-8 ml-1 h-4 w-4 accent-slate-100 rounded-sm 
                focus:outline-none focus:ring-2 focus:ring-opacity-50 
                bg-transparent"
          />
          <p className="text-xs text-gray-400">Name</p>
        </span>

        <div className="basis-[20%]">
          <p className="text-xs text-gray-400">Status</p>
        </div>

        <p className="basis-[30%] text-start text-xs text-gray-400">Email</p>
      </div>
      <div className="bg-[#32353F] h-[80%] flex-grow text-white overflow-y-scroll">
        {users.length > 0 &&
          users.map((user) => <UserCard user={user} key={user._id} />)}
      </div>
    </div>
  );
};

export default Users;
