import { useState, useEffect } from "react";
import * as DetCompraService from "../services/DetCompra";

export function useDetCompras() {
  const [DetCompras, setDetCompras] = useState([]);

  useEffect(() => {
    loadDetCompras();
  }, []);

  const loadDetCompras = async () => {
    const res = await DetCompraService.getDetCompras();
    setDetCompras(res.data);
  };

  return { DetCompras, loadDetCompras };
}
