import api from "../api/axios";
export const getEmpleados = () => api.get("Personas/empleado/");
export const getEmpleado= (id) => api.get(`${"Personas/empleado/"}${id}/`);
export const createEmpleado = (data) => api.post("Personasempleado/", data);
export const updateEmpleado = (id, data) => api.put(`${"Personas/empleado/"}${id}/`, data);
export const deleteEmpleado= (id) => api.delete(`${"Personas/empleado/"}${id}/`);

