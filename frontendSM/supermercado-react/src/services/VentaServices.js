import api from "../api/axios";
export const getVentas = () => api.get("Ventas/venta/");
export const getVenta= (id) => api.get(`${"Ventas/venta/"}${id}/`);
export const createVenta = (data) => api.post("Ventas/venta/", data);
export const updateVenta = (id, data) => api.put(`${"Ventas/venta/"}${id}/`, data);
export const deleteVenta = (id) => api.delete(`${"Ventas/venta/"}${id}/`);

