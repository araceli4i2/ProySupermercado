import { useState } from "react";
import { createProducto } from "../../services/productosService";

export default function ProductoForm({ onCreate }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProducto = {
      nombre,
      precio: parseFloat(precio),
      stock: parseInt(stock),
    };

    try {
      await createProducto(nuevoProducto);
      setNombre("");
      setPrecio("");
      setStock("");
      if (onCreate) onCreate(); // Refresca la lista si se pasa función
      alert("Producto creado exitosamente ");
    } catch (error) {
      console.error(error);
      alert("Error al crear el producto ");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
      </div>
      <div>
        <label>Stock:</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
      </div>
      <button type="submit">Crear Producto</button>
    </form>
  );
}
