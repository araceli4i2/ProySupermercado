from django.contrib import admin
from .models import Producto, Inventario, HistorialMovimiento

# Register your models here.
admin.site.register(Producto)
admin.site.register(Inventario) 
admin.site.register(HistorialMovimiento)