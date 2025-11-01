import { BrowserRouter, Routes, Route } from "react-router-dom";
//import SucursalesPage from "./pages/SucursalesPage";
//para no importar des esta manera tan tediosa los hooks y pages
//importaresmos del indz.js de hooks y de los pages
import { ProductosPage, SucursalesPage, RolPage, PersonasPage, ClientesPage, ProveedoresPage, InventariosPage, HistorialPage, ComprasPage, EmpleadosPage, DetCompraPage, GerentesPage, CategoriasPage, DetVentaPage, VentaPage } from "./pages/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/sucursales" element={<SucursalesPage />} />
        <Route path="/rol" element={<RolPage />} />
        <Route path="/personas" element={<PersonasPage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/proveedores" element={<ProveedoresPage />} />
        <Route path="/inventarios" element={<InventariosPage />} />
        <Route path="/historiales" element={<HistorialPage />} />
        <Route path="/compras" element={<ComprasPage />} />
        <Route path="/empleados" element={<EmpleadosPage />} />
        <Route path="/detcompras" element={<DetCompraPage />} />
        <Route path="/gerentes" element={<GerentesPage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/detventas" element={<DetVentaPage />} />
        <Route path="/ventas" element={<VentaPage />} />
      </Routes>
    </BrowserRouter>
  );
}
