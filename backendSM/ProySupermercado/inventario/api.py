from .models import Producto,Categoria,Inventario,HistorialMovimiento
from rest_framework import viewsets
from .serializers import ProductoSerializer,CategoriaSerializer,InventarioSerializer,HistorialMovimientoSerializer #en este se importa losserialzer registrados en serializers.py

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    
class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class InventarioViewSet(viewsets.ModelViewSet):
    queryset = Inventario.objects.all()
    serializer_class = InventarioSerializer
    
class HistorialMovimientoViewSet(viewsets.ModelViewSet):
    queryset = HistorialMovimiento.objects.all()
    serializer_class = HistorialMovimientoSerializer