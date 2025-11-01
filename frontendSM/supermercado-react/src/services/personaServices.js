import api from "../api/axios";
export const getPersonas = () => api.get("Personas/persona/");
export const getPersona = (id) => api.get(`${"Personas/persona/"}${id}/`);
export const createPersona = (data) => api.post("Personas/persona/", data);
export const updatePersona = (id, data) => api.put(`${"Personas/persona/"}${id}/`, data);
export const deletePersona = (id) => api.delete(`${"Personas/persona/"}${id}/`);

