import { useState, useEffect } from "react";
import * as HistorialService from "../services/HistorialServices";

export function useHistorial() {
  const [Historial, setHistorial] = useState([]);

  useEffect(() => {
    loadHistorial();
  }, []);

  const loadHistorial = async () => {
    const res = await HistorialService.getHistoriales();
    setHistorial(res.data);
  };

  return { Historial, loadHistorial };
}
