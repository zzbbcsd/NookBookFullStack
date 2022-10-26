import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Navbar />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <Dashboard />
      </div>
    </div>
  );
}
