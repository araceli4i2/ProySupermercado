import { useState, useEffect } from "react";
import * as ProductoService from "../services/productosService";

export function useProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    loadProductos();
  }, []);

  const loadProductos = async () => {
    const res = await ProductoService.getProductos();
    setProductos(res.data);
  };

  return { productos, loadProductos };
}
