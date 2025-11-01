import { useState, useEffect } from "react";
import * as PersonaService from "../services/personaServices";

export function usePersonas() {
  const [Personas, setPersonas] = useState([]);

  useEffect(() => {
    loadPersonas();
  }, []);

  const loadPersonas = async () => {
    const res = await PersonaService.getPersonas();
    setPersonas(res.data);
  };

  return { Personas, loadPersonas };
}
