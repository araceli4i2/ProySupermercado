import api from "../api/axios";
export const getHistoriales = () => api.get("Inventario/historial_movimiento/");
export const getHistorial= (id) => api.get(`${"Inventario/historial_movimiento/"}${id}/`);
export const createHistorial = (data) => api.post("Inventario/historial_movimiento/", data);
export const updateHistorial = (id, data) => api.put(`${"Inventario/historial_movimiento/"}${id}/`, data);
export const deleteHistorial= (id) => api.delete(`${"Inventario/historial_movimiento/"}${id}/`);

