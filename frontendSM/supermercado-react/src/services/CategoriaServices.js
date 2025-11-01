import api from "../api/axios";
export const getCategorias = () => api.get("Inventario/categorias/");
export const getCategoria= (id) => api.get(`${"Inventario/categorias/"}${id}/`);
export const createCategoria = (data) => api.post("Inventario/categorias/", data);
export const updateCategoria = (id, data) => api.put(`${"Inventario/categorias/"}${id}/`, data);
export const deleteCategoria = (id) => api.delete(`${"Inventario/categorias/"}${id}/`);

