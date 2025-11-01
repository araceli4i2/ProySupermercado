import { useClientes } from "../hooks/useCliente";

export default function ClientePage() {
  const { Clientes } = useClientes();

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {Clientes.map(c => (
          <li key={c.id}>{c.fecha_registro}-{c.persona}</li>
        ))}
        
      </ul>
    </div>
  );
}
