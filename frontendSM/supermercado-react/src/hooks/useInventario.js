import { useState, useEffect } from "react";
import * as InventariosService from "../services/InventarioService";

export function useInventarios() {
  const [Inventarios, setInventarios] = useState([]);

  useEffect(() => {
    loadInventarios();
  }, []);

  const loadInventarios = async () => {
    const res = await InventariosService.getInventarios();
    setInventarios(res.data);
  };

  return { Inventarios, loadInventarios };
}
