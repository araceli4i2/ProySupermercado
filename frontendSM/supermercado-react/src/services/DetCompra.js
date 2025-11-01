import api from "../api/axios";
export const getDetCompras = () => api.get("Compras/compra_detalle/");
export const getDetCompra= (id) => api.get(`${"Compras/compra_detalle/"}${id}/`);
export const createDetCompra = (data) => api.post("Compras/compra_detalle/", data);
export const updateDetCompra = (id, data) => api.put(`${"Compras/compra_detalle/"}${id}/`, data);
export const deleteDetCompra = (id) => api.delete(`${"Compras/compra_detalle/"}${id}/`);

