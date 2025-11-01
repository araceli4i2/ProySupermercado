# populate_initial_data.py
from personas.models import Rol, Persona, Gerente, Empleado, Cliente, Proveedor
from sucursales.models import Sucursal
from inventario.models import Categoria, Producto, Inventario, HistorialMovimiento
from compras.models import Compra, DetalleCompra
from ventas.models import Venta, DetalleVenta

# 1. Roles
roles = [
    {"nombre": "Administrador", "descripcion": "Gestiona todo el sistema"},
    {"nombre": "Gerente", "descripcion": "Supervisa sucursales y empleados"},
    {"nombre": "Empleado", "descripcion": "Atiende ventas y gestiona inventario"},
    {"nombre": "Cliente", "descripcion": "Compra productos"},
    {"nombre": "Proveedor", "descripcion": "Suministra productos"},
]

rol_objs = []
for r in roles:
    rol_objs.append(Rol.objects.create(**r))

# 2. Personas
personas = [
    {"nombre": "María", "paterno": "López", "materno": "García", "telefono": "78945612", "rol": rol_objs[1]},
    {"nombre": "Carlos", "paterno": "Pérez", "materno": "Rojas", "telefono": "76543210", "rol": rol_objs[2]},
    {"nombre": "Lucía", "paterno": "Flores", "materno": "Mamani", "telefono": "70123456", "rol": rol_objs[3]},
    {"nombre": "Miguel", "paterno": "Torres", "materno": "Soto", "telefono": "78912345", "rol": rol_objs[4]},
    {"nombre": "Ana", "paterno": "Cruz", "materno": "Vargas", "telefono": "79876543", "rol": rol_objs[1]},
    {"nombre": "José", "paterno": "Quispe", "materno": "Chura", "telefono": "70985632", "rol": rol_objs[2]},
]

persona_objs = []
for p in personas:
    persona_objs.append(Persona.objects.create(**p))

# 3. Gerentes
Gerente.objects.create(persona=persona_objs[0], salario=5500)
Gerente.objects.create(persona=persona_objs[4], salario=5200)

# 4. Sucursales
s1 = Sucursal.objects.create(nombre="Sucursal Central", direccion="Av. 16 de Julio N°123, La Paz", telefono="2223344", gerente_id=1)
s2 = Sucursal.objects.create(nombre="Sucursal Sur", direccion="Calle 21 de Calacoto N°456, La Paz", telefono="2245566", gerente_id=2)

# 5. Empleados
Empleado.objects.create(persona=persona_objs[1], cargo="Cajero", salario=2800, sucursal=s1)
Empleado.objects.create(persona=persona_objs[5], cargo="Limpieza", salario=2500, sucursal=s2)

# 6. Clientes
Cliente.objects.create(persona=persona_objs[2])

# 7. Categorías
c1 = Categoria.objects.create(nombre_categoria="Lácteos", descripcion="Productos derivados de la leche")
c2 = Categoria.objects.create(nombre_categoria="Bebidas", descripcion="Jugos, aguas y refrescos")
c3 = Categoria.objects.create(nombre_categoria="Snacks", descripcion="Galletas, papas fritas y similares")

# 8. Proveedor
p1 = Proveedor.objects.create(persona=persona_objs[3], nombre_empresa="Alimentos Andinos SRL", direccion="Zona Villa Fátima, Calle Los Pinos 123")

# 9. Productos
prod1 = Producto.objects.create(nombre_producto="Leche Pil 1L", precio_unitario=8.50, stock=100, categoria=c1, proveedor=p1)
prod2 = Producto.objects.create(nombre_producto="Jugo Del Valle 1L", precio_unitario=9.90, stock=80, categoria=c2, proveedor=p1)
prod3 = Producto.objects.create(nombre_producto="Galletas Oreo", precio_unitario=7.50, stock=150, categoria=c3, proveedor=p1)

# 10. Inventario
inv1 = Inventario.objects.create(producto=prod1, sucursal=s1, stock_actual=60)
inv2 = Inventario.objects.create(producto=prod2, sucursal=s1, stock_actual=40)
inv3 = Inventario.objects.create(producto=prod3, sucursal=s2, stock_actual=80)

# 11. Historial movimientos
HistorialMovimiento.objects.create(inventario=inv1, tipo_movimiento="E", cantidad=20, descripcion="Ingreso de productos nuevos")
HistorialMovimiento.objects.create(inventario=inv2, tipo_movimiento="S", cantidad=5, descripcion="Venta diaria")
HistorialMovimiento.objects.create(inventario=inv3, tipo_movimiento="C", cantidad=10, descripcion="Ajuste de control de stock")

# 12. Compra
compra = Compra.objects.create(total_compra=1500, proveedor=p1, empleado_id=1, sucursal=s1)

DetalleCompra.objects.create(compra=compra, producto=prod1, cantidad=50, precio_unitario=8.50, observacion="Compra mayorista de leche")
DetalleCompra.objects.create(compra=compra, producto=prod2, cantidad=30, precio_unitario=9.90, observacion="Compra de jugos surtidos")

# 13. Venta
venta = Venta.objects.create(total=45.00, metodo_pago="EFECTIVO", cliente_id=1, empleado_id=1, sucursal=s1)

DetalleVenta.objects.create(venta=venta, producto=prod1, cantidad=2, precio_unitario=8.50, observacion="Venta al cliente Lucía Flores")
DetalleVenta.objects.create(venta=venta, producto=prod2, cantidad=3, precio_unitario=9.90, observacion="Venta de jugos")
