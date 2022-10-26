import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";

export default function SignIn() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await swal("Logging in");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-white  overscroll-none">
      <div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-yellow-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Log In
          </h1>
          <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Welcome to Nook's Books
          </p>
        </div>
        <form onSubmit={login}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email Addres"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          <div className="text-center mt-6">
            <button className="py-3 w-64 text-xl text-white bg-green-500 rounded-2xl">
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="w-40 h-40 absolute bg-red-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block "></div>
    </div>
  );
}
