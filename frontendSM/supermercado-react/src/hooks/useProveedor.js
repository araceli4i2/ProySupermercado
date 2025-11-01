import { useState, useEffect } from "react";
import * as ProveedorService from "../services/ProveedorServices";

export function useProveedor() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    loadProveedores();
  }, []);

  const loadProveedores = async () => {
    const res = await ProveedorService.getProveedores(); 
    setProveedores(res.data);
  };

  return { proveedores, loadProveedores };
}
