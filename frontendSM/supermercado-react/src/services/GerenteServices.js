import api from "../api/axios";
export const getGerentes = () => api.get("Personas/gerente/");
export const getGerente= (id) => api.get(`${"Personas/gerente/"}${id}/`);
export const createGerente = (data) => api.post("Personas/gerente/", data);
export const updateGerente = (id, data) => api.put(`${"Personas/gerente/"}${id}/`, data);
export const deleteGerente = (id) => api.delete(`${"Personas/gerente/"}${id}/`);

