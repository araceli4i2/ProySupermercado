import api from "../api/axios";
export const getDetVentas = () => api.get("Ventas/venta_detalle/");
export const getDetVenta= (id) => api.get(`${"Ventas/venta_detalle/"}${id}/`);
export const createDetVenta = (data) => api.post("Ventas/venta_detalle/", data);
export const updateDetVenta = (id, data) => api.put(`${"Ventas/venta_detalle/"}${id}/`, data);
export const deleteDetVenta = (id) => api.delete(`${"Ventas/venta_detalle/"}${id}/`);

