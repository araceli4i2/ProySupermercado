import { usePersonas } from "../hooks/usePersonas";

export default function PersonasPage() {
  const { Personas } = usePersonas();

  return (
    <div>
      <h1>Lista de Personas</h1>
      <ul>
        {Personas.map(p => (
          <li key={p.id}>{p.nombre}-{p.materno}-{p.paterno}-{p.telefono}-{p.rol}</li>
        ))}
        
      </ul>
    </div>
  );
}
