import { useRol } from "../hooks/useRol";

export default function RolPage() {
  const { rol } = useRol(); //el "rol que se define aquie como constante tiene que coincider con el "rol" de userol"

  return (
    <div>
      <h1>Lista de roles</h1>
      <ul>
        {rol.map(r => (
            <li key={r.id}>{r.nombre}-{r.descripcion}</li>
        ))}
      </ul>
    </div>
  );
}
