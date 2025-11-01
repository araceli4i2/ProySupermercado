import { useGerentes } from "../hooks/useGerente";

export default function GerentesPage() {
  const { Gerentes } = useGerentes();

  return (
    <div>
      <h1>Lista de gerentes</h1>
      <ul>
        {Gerentes.map(g => (
          <li key={g.id}>{g.salario}-{g.persona}</li>
        ))}
        
      </ul>
    </div>
  );
}
