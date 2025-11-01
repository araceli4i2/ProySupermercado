import { useState, useEffect } from "react";
import * as DetVentaService from "../services/DetVentaServices";

export function useDetVentas() {
  const [DetVentas, setDetVentas] = useState([]);

  useEffect(() => {
    loadDetVentas();
  }, []);

  const loadDetVentas = async () => {
    const res = await DetVentaService.getDetVentas();
    setDetVentas(res.data);
  };

  return { DetVentas, loadDetVentas };
}
