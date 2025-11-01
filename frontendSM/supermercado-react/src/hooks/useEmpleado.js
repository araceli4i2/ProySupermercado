import { useState, useEffect } from "react";
import * as EmpleadoService from "../services/EmpleadoServices";

export function useEmpleados() {
  const [Empleados, setEmpleados] = useState([]);

  useEffect(() => {
    loadEmpleados();
  }, []);

  const loadEmpleados = async () => {
    const res = await EmpleadoService.getEmpleados();
    setEmpleados(res.data);
  };

  return { Empleados, loadEmpleados };
}
