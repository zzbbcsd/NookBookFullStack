import Navbar from "../components/Navbar";
import Table from "../components/table";
import { useEffect, useState } from "react";
import OrderService from "../apis/orderService";
import Header from "../components/header";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // Option 1:
  /** Parent provides child with a way to delete something from parent's state
   * const onDelete((id) => {
   *  setOrders(orders.remove(order => order.id === id));
   * })
   */

  /** Option 2
   * Parent provide child with a function that forces parent to refetch from server
   *
   */
  const requestRefetch = () => {
    OrderService.getAll().then((response) => setOrders(response.data));
  };

  const ordersFetched = () => {
    if (orders.length === 0) {
      return <div className="my-10">Loading...</div>;
    } else {
      return <Table data={orders} hardRefersh={requestRefetch} />;
    }
  };

  useEffect(() => {
    OrderService.getAll().then((response) => setOrders(response.data));
  }, []);

  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Navbar />
      <div className="w-full flex flex-col h-screen overflow-auto">
        <Header />
        {ordersFetched()}
      </div>
    </div>
  );
}
