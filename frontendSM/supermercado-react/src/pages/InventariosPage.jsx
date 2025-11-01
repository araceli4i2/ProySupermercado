import { useInventarios } from "../hooks/useInventario";

export default function InventariosPage() {
  const { Inventarios } = useInventarios();

  return (
    <div>
      <h1>Lista de Inventarios</h1>
      <ul>
        {Inventarios.map(i => (
          <li key={i.id}>{i.stock_actual}-{i.producto}-{i.sucursal}</li>
        ))}
        
      </ul>
    </div>
  );
}
