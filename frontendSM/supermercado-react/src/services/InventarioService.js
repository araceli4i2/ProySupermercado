import api from "../api/axios";
export const getInventarios = () => api.get("Inventario/inventario/");
export const getInventario= (id) => api.get(`${"Inventario/inventario/"}${id}/`);
export const createInventario = (data) => api.post("Inventario/inventario/", data);
export const updateInventario = (id, data) => api.put(`${"Inventario/inventario/"}${id}/`, data);
export const deleteInventario= (id) => api.delete(`${"Inventario/inventario/"}${id}/`);

