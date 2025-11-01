from django.db import models
from personas.models import Proveedor
from sucursales.models import Sucursal

class Categoria(models.Model):
    nombre_categoria = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.nombre_categoria


class Producto(models.Model):
    nombre_producto = models.CharField(max_length=100)
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True)
    proveedor = models.ForeignKey(Proveedor, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.nombre_producto


class Inventario(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    sucursal = models.ForeignKey(Sucursal, on_delete=models.CASCADE)
    stock_actual = models.PositiveIntegerField()

    class Meta:
        unique_together = ('producto', 'sucursal')

    def __str__(self):
        return f"{self.producto} - {self.sucursal}"


class HistorialMovimiento(models.Model):
    TIPO_CHOICES = [
        ('E', 'Entrada'),
        ('S', 'Salida'),
        ('C', 'Corrección'),
    ]
    inventario = models.ForeignKey(Inventario, on_delete=models.CASCADE)
    fecha_movimiento = models.DateTimeField(auto_now_add=True)
    tipo_movimiento = models.CharField(max_length=1, choices=TIPO_CHOICES)
    cantidad = models.PositiveIntegerField()
    descripcion = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.get_tipo_movimiento_display()} - {self.cantidad} ({self.inventario})"
