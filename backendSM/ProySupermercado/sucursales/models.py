from django.db import models
from personas.models import Gerente, Empleado 

class Sucursal(models.Model):
    nombre = models.CharField(max_length=50)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    gerente = models.OneToOneField(Gerente, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

Empleado.add_to_class('sucursal', models.ForeignKey(Sucursal, on_delete=models.SET_NULL, null=True))
