import { useState, useEffect } from "react";
import * as RolService from "../services/RolServices";

export function useRol() {
  const [rol, setRol] = useState([]);

  useEffect(() => {
    loadRol();
  }, []);

  const loadRol = async () => {
    const res = await RolService.getRols();
    setRol(res.data);
  };

  return { rol, loadRol };
}
