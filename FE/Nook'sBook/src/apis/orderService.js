import http from "./axios";

const getAll = () => {
  return http.get("/Orders");
};

const get = (id) => {
  return http.get(`/Orders/${id}`);
};

const create = (data) => {
  return http.post("/addOrder", data);
};

const update = (id, data) => {
  return http.put(`/Orders/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/Orders/${id}`);
};

const OrderService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default OrderService;
