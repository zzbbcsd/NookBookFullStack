import OrderService from "../apis/orderService";
import Modal from "./modal";
import swal from "sweetalert";

export default function Table(props) {
  /**
   *
   * [activeModal, setActiveModal] = useState(null);
   *
   * <button onClick={() => setActiveModal(order.id)}>Update</Button>
   */

  const handleDelete = (id) => {
    OrderService.remove(id)
      .then((response) => {
        if (response.status === 200) {
          swal(`Order ${id} removed.`);
          props.hardRefersh();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="w-full mt-6 p-6 overscroll-contain">
      <p className="text-xl pb-3 flex items-center overflow-auto">
        <i className="fas fa-list mr-3"></i> Orders
      </p>
      <div className="bg-white overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-green-400 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Order ID
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Customer Name
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Customer Email
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Book Name
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Actions
              </th>
            </tr>
          </thead>
          {/** <Modal id={modalId} /> */}
          <tbody className="text-gray-700">
            {props.data.map((order) => (
              <tr key={order.id}>
                <td className="w-1/3 text-left py-3 px-4">{order.id}</td>
                <td className="w-1/3 text-left py-3 px-4">
                  {order.customerName}
                </td>
                <td className="w-1/3 text-left py-3 px-4">
                  {order.customerEmail}
                </td>
                <td className="text-left py-3 px-4">{order.title}</td>
                <td className="text-left py-3 px-4">
                  {/* <button onClick={() => setActiveModal(order.id)}>Update</Button>  */}
                  <Modal id={order.id} hardRefersh={props.hardRefersh} />
                  <a
                    href="#my-modal-4"
                    className="my-2 inline-block px-5 py-2 border-2 border-red-600 
                    text-red-600 font-medium text-xs leading-tight uppercase 
                    rounded hover:bg-black hover:bg-opacity-5 focus:outline-none 
                    focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Delete
                  </a>
                  <div className="modal modal-close" id="my-modal-4">
                    <div className="modal-box bg-white">
                      <a
                        href="#"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </a>

                      <h3 className="font-bold text-lg text-red-500">
                        You want to delete this order?
                      </h3>
                      <div className="modal-action">
                        <a href="#">
                          <button
                            type="button"
                            className="btn bg-red-300 text-black"
                            onClick={() => handleDelete(order.id)}
                          >
                            Yes
                          </button>
                        </a>
                        <a href="#" className="btn bg-green-300 text-black">
                          No!
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
