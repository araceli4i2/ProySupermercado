import { useEmpleados } from "../hooks/useEmpleado";

export default function EmpleadosPage() {
  const { Empleados } = useEmpleados();

  return (
    <div>
      <h1>Lista de Empleados</h1>
      <ul>
        {Empleados.map(e => (
          <li key={e.id}>{e.cargo}-{e.salario}-{e.persona}-{e.sucursal}</li>
        ))}
        
      </ul>
    </div>
  );
}
