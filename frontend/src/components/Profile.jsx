import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMember, removeMember, clearAll } from "../context/teamContext";
import EyeClosed from "../icons/EyeClosed";
import EyeOpen from "../icons/EyeOpen";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const teamMembers = useSelector((state) => state.teamState.members);
  const dispatch = useDispatch();

  console.log(teamMembers);

  const createTeam = async () => {
    const response = await axios.post("http://localhost:4000/api/team/", {
      memberIds: teamMembers.map((member) => member.id),
    });
    const data = await response.data;
    console.log(data);
    if (response.status == 201) {
      toast(" Team created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(clearAll());
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="
    flex flex-col
    
    basis-[25%] bg-[#1E212A] text-blue-500 h-full px-4 py-4"
    >
      <ToastContainer
        position="top-right"
        autoClose={10}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h1
        className="text-xl font-bold
      "
      >
        Add Members To Your Team
      </h1>
      {teamMembers.length == 0 ? (
        <div className="flex flex-col h-full items-center mt-32">
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png?f=webp"
            alt=""
          />
          <p>No members yet</p>
        </div>
      ) : (
        <div className="mt-5 overflow-y-scroll">
          {teamMembers.map((member) => (
            <div
              key={member._id}
              className="flex items-center justify-between py-2 px-2 border
               border-gray-100 border-opacity-10 rounded-lg"
            >
              <span className="basis-[60%]  ml-2 flex items-center justify-start gap-3 ">
                <img
                  src={member.avatar}
                  height={60}
                  width={60}
                  className="rounded-md bg-gray-200"
                  alt={`user-{user.id}`}
                />{" "}
                <div className="">
                  <p>
                    {member.first_name} {member.last_name}
                  </p>
                  <p className="text-xs text-gray-400">{member.domain}</p>
                  <p>
                    {member.available ? (
                      <span className="flex items-center gap-2 text-green-400 text-xs font-bold">
                        <EyeOpen />
                        Available
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-red-400 text-xs font-bold">
                        <EyeClosed />
                        Not Available
                      </span>
                    )}
                  </p>
                </div>
              </span>
              <button
                className="basis-
    flex items-center justify-center
    bg-white h-6  p-2 rounded-full text-black hover:bg-gray-100  font-semibold py-1 px-2  shadow
  "
                onClick={() => dispatch(removeMember(member.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {teamMembers.length > 0 && (
        <button
          className="mt-auto basis-
    flex items-center justify-center
    bg-white h-10  p-2 rounded-md text-black hover:bg-gray-100  font-semibold py-1 px-2  shadow
  "
          onClick={createTeam}
        >
          Create Team
        </button>
      )}
    </div>
  );
};

export default Profile;
