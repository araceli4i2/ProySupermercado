# apps/productos/forms.py
from django import forms
from .models import Producto

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['nombre_producto', 'precio_unitario', 'stock', 'categoria', 'proveedor']
        

