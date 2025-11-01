from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class Rol(models.Model):
    nombre = models.CharField(max_length=50, unique=True)
    descripcion = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.nombre


class Persona(models.Model):
    nombre = models.CharField(max_length=50)
    paterno = models.CharField(max_length=50)
    materno = models.CharField(max_length=50, blank=True, null=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    rol = models.ForeignKey(Rol, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.nombre} {self.paterno}"


class Gerente(models.Model):
    persona = models.OneToOneField(Persona, on_delete=models.CASCADE)
    salario = models.PositiveIntegerField()

    def __str__(self):
        return f"Gerente: {self.persona}"


class Empleado(models.Model):
    persona = models.OneToOneField(Persona, on_delete=models.CASCADE)
    cargo = models.CharField(max_length=50)
    salario = models.PositiveIntegerField()
    # Relación con sucursal se define después en app sucursales

    def __str__(self):
        return f"{self.persona.nombre} - {self.cargo}"


class Cliente(models.Model):
    persona = models.OneToOneField(Persona, on_delete=models.CASCADE)
    fecha_registro = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Cliente: {self.persona.nombre}"


class Proveedor(models.Model):
    persona = models.OneToOneField(Persona, on_delete=models.CASCADE)
    nombre_empresa = models.CharField(max_length=80)
    direccion = models.CharField(max_length=80, blank=True, null=True)

    def __str__(self):
        return self.nombre_empresa

