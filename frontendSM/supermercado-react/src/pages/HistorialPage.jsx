import { useHistorial} from "../hooks/useHistorial";

export default function HistorialesPage() {
  const { Historial } = useHistorial();

  return (
    <div>
      <h1>Lista de Historiales</h1>
      <ul>
        {Historial.map(h => (
          <li key={h.id}>{h.fecha_movimiento}-{h.tipo_movimiento}-{h.cantidad}-{h.descripcion}-{h.inventario}</li>
        ))}
        
      </ul>
    </div>
  );
}
