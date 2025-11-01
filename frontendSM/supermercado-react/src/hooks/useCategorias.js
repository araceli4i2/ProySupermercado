import { useState, useEffect } from "react";
import * as CategoriaService from "../services/CategoriaServices";

export function useCategorias() {
  const [Categorias, setCategorias] = useState([]);

  useEffect(() => {
    loadCategorias();
  }, []);

  const loadCategorias = async () => {
    const res = await CategoriaService.getCategorias();
    setCategorias(res.data);
  };

  return { Categorias, loadCategorias };
}
