import { useProveedor } from "../hooks/useProveedor";

export default function ProveedoresPage() {
  const { proveedores } = useProveedor();

  return (
    <div>
      <h1>Lista de Proveedores</h1>
      <ul>
        {proveedores?.map(p => (
          <li key={p.id}>
            {p.nombre_empresa} - {p.direccion} - {p.persona}
          </li>
        ))}
      </ul>
    </div>
  );
}
