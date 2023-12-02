import EyeOpen from "../icons/EyeOpen";
import EyeClosed from "../icons/EyeClosed";
import { useDispatch, useSelector } from "react-redux";
import { addMember, removeMember } from "../context/teamContext";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const teamMembers = useSelector((state) => state.teamState.members);

  console.log(teamMembers);

  return (
    <div className="w-full flex items-center justify-around py-2 px-4 border border-gray-100 border-opacity-10 ">
      {/* image */}
      <span className="basis-[40%]  ml-2 flex items-center justify-start gap-3 ">
        <input
          type="checkbox"
          className="mr-6 h-4 w-4 accent-slate-100 rounded-sm 
    focus:outline-none focus:ring-2 focus:ring-opacity-50 
    bg-transparent"
          onChange={() => dispatch(addMember(user))}
        />
        <img
          src={user.avatar}
          height={35}
          width={35}
          className="rounded-full bg-gray-200"
          alt={`user-{user.id}`}
        />{" "}
        <div className="">
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p className="text-xs text-gray-400">{user.domain}</p>
        </div>
      </span>

      <div className="basis-[20%]">
        <button
          className="basis-
    flex items-center justify-center
    bg-white h-6  p-2 rounded-full text-black hover:bg-gray-100  font-semibold py-1 px-2  shadow 
  "
        >
          {user.available ? (
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
        </button>
      </div>

      <p className="basis-[30%] text-start">{user.email}</p>
    </div>
  );
};

export default UserCard;
