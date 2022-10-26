import { useState } from "react";
import Modal from "./modal";
import OrderService from "../apis/orderService";
import { books } from "../pages/products";
import swal from "sweetalert";

const INITIAL_STATE = {
  customerName: "",
  customerEmail: "",
  title: "",
  author: "",
  publisher: "",
  giftMessage: ""
};

export default function Form(props) {
  const [order, setOrder] = useState(INITIAL_STATE);

  const updateField = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  };

  const updateBook = (e) => {
    setOrder({
      ...order,
      title: books[e.target.value].Title,
      author: books[e.target.value].Author,
      publisher: books[e.target.value].Publication
    });
  };
  const saveOrder = (e) => {
    e.preventDefault();
    const data = {
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      title: order.title,
      author: order.author,
      publisher: order.publisher,
      giftMessage: order.giftMessage
    };

    OrderService.create(JSON.stringify(data))
      .then((response) => {
        swal("Order saved!");
        console.log(response.data);
      })
      .catch((e) => {
        swal(e.message);
      });
    setOrder(INITIAL_STATE);
  };

  return (
    <div className="flex flex-wrap justify-center overscroll-contain">
      <div className="w-full lg:w-1/2 mt-6 lg:pl-2 overflow-auto">
        <p className="text-xl pb-6 flex items-center">
          <i className="fas fa-list mr-3"></i> Order Form
        </p>
        <div className="leading-loose ">
          <form
            className="p-10 bg-white rounded shadow-xl"
            onSubmit={saveOrder}
          >
            <p className="text-lg text-gray-800 font-medium pb-4">
              Order information
            </p>
            <div className="">
              <label
                className="block text-sm text-gray-600 p-2"
                htmlFor="cus_name"
              >
                Customer Full Name
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="customerName"
                type="text"
                required
                placeholder="Full Name"
                aria-label="Name"
                onChange={updateField}
                value={order.customerName}
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-sm text-gray-600 p-2"
                htmlFor="cus_email"
              >
                Email
              </label>
              <input
                className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="customerEmail"
                type="email"
                required
                placeholder="Customer Email"
                aria-label="Email"
                onChange={updateField}
                value={order.customerEmail}
              />
            </div>
            <div className="mt-2">
              <label
                className=" block text-sm text-gray-600 p-2"
                htmlFor="cus_email"
              >
                Book Info
              </label>
              <div className="grid grid-cols-2 gap-2">
                {books.map((book) => (
                  <div
                    key={book.Num}
                    className="rounded-lg shadow-lg bg-white max-w-sm"
                  >
                    <a
                      href="#!"
                      className="flex justify-center"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        className="rounded-t-lg h-28"
                        src={book.IMG}
                        alt=""
                      />
                    </a>
                    <div className="p-6">
                      <h5 className="text-gray-900 text-sm font-bold mb-2 h-10">
                        {book.Title}
                      </h5>
                      <div className="form-control ">
                        <label className="label cursor-pointer flex justify-center">
                          <input
                            type="radio"
                            name="radio-6"
                            label={book.Num}
                            className="radio checked:bg-green-500"
                            onClick={(e) => updateBook(e)}
                            value={book.Num}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2">
              <label
                className=" block text-sm text-gray-600 p-2"
                htmlFor="cus_email"
              >
                Gift Message(optional)
              </label>
              <input
                className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="formFile"
                placeholder="Say something sweet..."
                name="giftMessage"
                onChange={updateField}
              />
            </div>

            <div className="mt-6">
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-green-900 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
