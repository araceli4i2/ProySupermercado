import { useState, useEffect } from "react";
import * as ClienteService from "../services/ClienteServices";

export function useClientes() {
  const [Clientes, setClientes] = useState([]);

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = async () => {
    const res = await ClienteService.getClientes();
    setClientes(res.data);
  };

  return { Clientes, loadClientes };
}
