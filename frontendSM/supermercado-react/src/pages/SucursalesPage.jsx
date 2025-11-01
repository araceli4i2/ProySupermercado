import { useSucursales } from "../hooks/useSucursales";

export default function SucursalPage() {
  const { Sucursales } = useSucursales();

  return (
    <div>
      <h1>Lista de Sucursales</h1>
      <ul>
        {Sucursales.map(s => (
          <li key={s.id}>{s.nombre} - {s.direccion} - {s.telefono}- {s.gerente}</li>
        ))}
      </ul>
    </div>
  );
}
