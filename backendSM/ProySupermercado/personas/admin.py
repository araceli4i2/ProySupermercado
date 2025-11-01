from django.contrib import admin
from .models import Persona, Rol, Gerente, Empleado, Cliente, Proveedor

# Register your models here.
admin.site.register(Persona)
admin.site.register(Rol)
admin.site.register(Gerente)
admin.site.register(Empleado)
admin.site.register(Cliente)
admin.site.register(Proveedor)