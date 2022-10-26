import Navbar from "../components/Navbar";
import Header from "../components/header";
export default function Products() {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 font-family-karla flex">
        <Navbar />
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
          books
        </div>
      </div>
    </div>
  );
}
