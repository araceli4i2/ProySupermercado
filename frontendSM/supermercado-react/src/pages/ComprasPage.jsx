import { useCompras } from "../hooks/useCompras";

export default function ComprasPage() {
  const { Compras } = useCompras();

  return (
    <div>
      <h1>Lista de Compras</h1>
      <ul>
          {Compras.map(c => (
            <li key={c.id}>{c.fecha_compra}-{c.total_compra}-{c.proveedor}-{c.empleado}-{c.sucursal}</li>
          ))}
        
      </ul>
    </div>
  );
}
