import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-2 inline-flex">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-[#000000] text-opacity-45 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
      <div className="text-[#171725] font-semibold font-inter ml-1">Logout</div>
    </div>
  );
};
export default LogoutButton;
