//import axios from "axios";
//const API_URL = "http://127.0.0.1:8000/api/Inventario/productos/";
//en ves de poner esta importaciones en todoslos servicios exportaremos lafuncion axios dela carpeta api
import api from "../api/axios";
export const getProductos = () => api.get("Inventario/productos/");
export const getProducto = (id) => api.get(`${"Inventario/productos/"}${id}/`);
export const createProducto = (data) => api.post("Inventario/productos/", data);
export const updateProducto = (id, data) => api.put(`${"Inventario/productos/"}${id}/`, data);
export const deleteProducto = (id) => api.delete(`${"Inventario/productos/"}${id}/`);

