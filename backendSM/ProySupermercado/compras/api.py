from .models import Compra,DetalleCompra
from rest_framework import viewsets
from .serializers import CompraSerializer,DetalleCompraSerializer
#en este se importa losserialzer registrados en serializers.py
class CompraViewSet(viewsets.ModelViewSet):
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer
    
class DetalleCompraViewSet(viewsets.ModelViewSet):
    queryset = DetalleCompra.objects.all()
    serializer_class = DetalleCompraSerializer