import { useProductos } from "../hooks/useProductos";
import ProductoForm from "../components/productos/ProductoForm";  

export default function ProductosPage() {
  const { productos,loadProducto } = useProductos();

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ProductoForm onCreate={loadProducto} />
      <ul>
        {productos.map(p => (
          <li key={p.id}>{p.nombre_producto} - {p.precio_unitario} - {p.stock}</li>
        ))}
      </ul>
    </div>
  );
}
