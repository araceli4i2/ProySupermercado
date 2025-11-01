import api from "../api/axios";
export const getClientes = () => api.get("Personas/cliente/");
export const getCliente= (id) => api.get(`${"Personas/cliente/"}${id}/`);
export const createCliente = (data) => api.post("Personas/cliente/", data);
export const updateCliente = (id, data) => api.put(`${"Personas/cliente/"}${id}/`, data);
export const deleteCliente= (id) => api.delete(`${"Personas/cliente/"}${id}/`);

