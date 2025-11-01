import api from "../api/axios";
export const getCompras = () => api.get("Compras/compra/");
export const getCompra= (id) => api.get(`${"Compras/compra/"}${id}/`);
export const createCompra = (data) => api.post("Compras/compra/", data);
export const updateCompra = (id, data) => api.put(`${"Compras/compra/"}${id}/`, data);
export const deleteCompra = (id) => api.delete(`${"Compras/compra/"}${id}/`);

