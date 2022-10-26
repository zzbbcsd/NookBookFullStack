import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import swal from "sweetalert";

export default function Headers() {
  let navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    await swal("Signing out");
    navigate("/");
  };
  return (
    <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
      <div className="w-1/2"></div>
      <div className="relative w-1/2 flex justify-end">
        <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
          <img src="https://images.unsplash.com/photo-1501869150797-9bbb64f782fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" />
        </button>
        <button
          className="p-2 mx-3 w-30 text-sm text-gray-800 bg-green-400 rounded-xl"
          onClick={logout}
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
