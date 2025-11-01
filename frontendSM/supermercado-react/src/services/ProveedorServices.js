import api from "../api/axios";
export const getProveedores = () => api.get("Personas/proveedor/");
export const getProveedor= (id) => api.get(`${"Personas/proveedor/"}${id}/`);
export const createProveedor = (data) => api.post("Personas/proveedor/", data);
export const updateProveedor = (id, data) => api.put(`${"Personas/proveedor/"}${id}/`, data);
export const deleteProveedor= (id) => api.delete(`${"Personas/proveedor/"}${id}/`);

