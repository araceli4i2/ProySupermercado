import { useState, useEffect } from "react";
import * as GerenteService from "../services/GerenteServices";

export function useGerentes() {
  const [Gerentes, setGerentes] = useState([]);

  useEffect(() => {
    loadGerentes();
  }, []);

  const loadGerentes = async () => {
    const res = await GerenteService.getGerentes();
    setGerentes(res.data);
  };

  return { Gerentes, loadGerentes };
}
