import { useDetVentas } from "../hooks/useDetVenta";

export default function DetVentasPage() {
  const { DetVentas } = useDetVentas();

  return (
    <div>
      <h1>Lista de Detalles de Ventas</h1>
      <ul>
        {DetVentas.map(d => (
          <li key={d.id}>{d.cantidad}-{d.precio_unitario}-{d.observacion}-{d.venta}-{d.producto}</li>
        ))}
      </ul>
    </div>
  );
}
