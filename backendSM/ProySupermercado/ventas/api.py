from .models import Venta,DetalleVenta
from rest_framework import viewsets
from .serializers import VentaSerializer,DetalleVentaSerializer
#en este se importa losserialzer registrados en serializers.py
class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer
    
class DetalleVentaViewSet(viewsets.ModelViewSet):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer