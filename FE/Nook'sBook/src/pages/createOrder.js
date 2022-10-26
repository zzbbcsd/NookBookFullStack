import Navbar from "../components/Navbar";
import Form from "../components/form";
import Header from "../components/header";
export default function CreateOrders() {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Navbar />
      <div className="w-full flex flex-col h-screen overflow-auto">
        <Header />
        <main className="w-full flex-grow p-6">
          <h1 className="w-full text-3xl text-black pb-6">Create New Order</h1>
          <Form />
        </main>
      </div>
    </div>
  );
}
