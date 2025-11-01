from django.db import models
from inventario.models import Producto
from personas.models import Cliente, Empleado
from sucursales.models import Sucursal

class Venta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True)
    empleado = models.ForeignKey(Empleado, on_delete=models.SET_NULL, null=True)
    sucursal = models.ForeignKey(Sucursal, on_delete=models.SET_NULL, null=True)
    fecha_venta = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    metodo_pago = models.CharField(
        max_length=20,
        choices=[('QR', 'QR'), ('EFECTIVO', 'Efectivo'), ('TARJETA', 'Tarjeta')]
    )

    def __str__(self):
        return f"Venta #{self.id} - {self.metodo_pago}"


class DetalleVenta(models.Model):
    venta = models.ForeignKey(Venta, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True)
    cantidad = models.PositiveIntegerField()
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    observacion = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.producto} ({self.cantidad})"

