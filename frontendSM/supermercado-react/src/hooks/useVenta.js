import { useState, useEffect } from "react";
import * as VentasService from "../services/VentaServices";

export function useVenta() {
  const [ventas, setVentas] = useState([]); 

  useEffect(() => {
    loadVentas();
  }, []);

  const loadVentas = async () => {
    try {
      const res = await VentasService.getVentas(); 
      setVentas(res.data);
    } catch (error) {
      console.error("Error cargando ventas:", error);
    }
  };

  return { ventas, loadVentas };
}
