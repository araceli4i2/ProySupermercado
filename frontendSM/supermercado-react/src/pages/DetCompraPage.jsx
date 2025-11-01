import { useDetCompras } from "../hooks/useDetCompras";

export default function DetCompraPage() {
  const { DetCompras } = useDetCompras();

  return (
    <div>
      <h1>Lista de Detalles de Compra</h1>
      <ul>
        {DetCompras.map(d => (
          <li key={d.id}>{d.cantidad}-{d.precio_unitario}-{d.observacion}-{d.compra}-{d.producto}</li>
        ))}
        
      </ul>
    </div>
  );
}
