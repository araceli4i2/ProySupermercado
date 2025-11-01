import { useCategorias } from "../hooks/useCategorias";

export default function CategoriasPage() {
  const { Categorias } = useCategorias();

  return (
    <div>
      <h1>Lista de Categorias</h1>
      <ul>
        {Categorias.map(c => (
          <li key={c.id}>{c.nombre_categoria}-{c.descripcion}</li>
        ))}
        
      </ul>
    </div>
  );
}
