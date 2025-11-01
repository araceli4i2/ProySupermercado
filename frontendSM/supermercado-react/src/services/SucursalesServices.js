import api from "../api/axios";
export const getSucursales = () => api.get("Sucursales/sucursal/");
export const getSucursal= (id) => api.get(`${"Sucursales/sucursal/"}${id}/`);
export const createSucursal = (data) => api.post("Sucursales/sucursal/", data);
export const updateSucursal = (id, data) => api.put(`${"Sucursales/sucursal/"}${id}/`, data);
export const deleteSucursal = (id) => api.delete(`${"Sucursales/sucursal/"}${id}/`);

