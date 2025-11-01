from django.db import models
from inventario.models import Producto
from personas.models import Proveedor, Empleado
from sucursales.models import Sucursal

class Compra(models.Model):
    proveedor = models.ForeignKey(Proveedor, on_delete=models.SET_NULL, null=True)
    empleado = models.ForeignKey(Empleado, on_delete=models.SET_NULL, null=True)
    sucursal = models.ForeignKey(Sucursal, on_delete=models.SET_NULL, null=True)
    fecha_compra = models.DateTimeField(auto_now_add=True)
    total_compra = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Compra #{self.id} - {self.proveedor}"


class DetalleCompra(models.Model):
    compra = models.ForeignKey(Compra, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True)
    cantidad = models.PositiveIntegerField()
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    observacion = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.producto} x{self.cantidad}"

