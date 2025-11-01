from .serializers import SucursalSerializer
from .models import Sucursal
from rest_framework import viewsets

class SucursalViewSet(viewsets.ModelViewSet):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalSerializer   
    