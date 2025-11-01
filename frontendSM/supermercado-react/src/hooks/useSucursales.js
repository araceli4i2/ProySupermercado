import { useState, useEffect } from "react";
import * as SucursalesService from "../services/SucursalesServices";

export function useSucursales() {
  const [Sucursales, setSucursales] = useState([]);

  useEffect(() => {
    loadSucursales();
  }, []);

  const loadSucursales = async () => {
    const res = await SucursalesService.getSucursales();
    setSucursales(res.data);
  };

  return { Sucursales, loadSucursales };
}
