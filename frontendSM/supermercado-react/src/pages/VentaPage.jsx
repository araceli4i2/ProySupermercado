import { useVenta } from "../hooks/useVenta";

export default function VentasPage() {
    const { ventas } = useVenta();

  return (
    <div>
      <h1>Lista de Ventas</h1>
      <ul>
        {ventas.map(v => (
          <li key={v.id}>{v.fecha_venta}-{v.total}-{v.metodo_pago}-{v.cliente}-{v.empleado}-{v.sucursal}</li>
        ))}
      </ul>
    </div>
  );
}
