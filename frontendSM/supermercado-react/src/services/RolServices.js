import api from "../api/axios";
export const getRols = () => api.get("Personas/rol/");
export const getRol= (id) => api.get(`${"Personas/rol/"}${id}/`);
export const createRol = (data) => api.post("Personas/rol/", data);
export const updateRol = (id, data) => api.put(`${"Personas/rol/"}${id}/`, data);
export const deleteRol= (id) => api.delete(`${"Personas/rol/"}${id}/`);

