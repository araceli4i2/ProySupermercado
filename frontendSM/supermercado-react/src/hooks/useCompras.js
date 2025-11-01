import { useState, useEffect } from "react";
import * as ComprasService from "../services/CompraServices";

export function useCompras() {
  const [Compras, setCompras] = useState([]);

  useEffect(() => {
    loadCompras();
  }, []);

  const loadCompras = async () => {
    const res = await ComprasService.getCompras();
    setCompras(res.data);
  };

  return { Compras, loadCompras };
}
