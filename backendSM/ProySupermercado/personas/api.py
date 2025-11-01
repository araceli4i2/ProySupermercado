from .models import Persona,Empleado,Cliente,Proveedor,Rol,Gerente
from rest_framework import viewsets
from .serializers import PersonaSerializer,EmpleadoSerializer,ClienteSerializer,ProveedorSerializer,RolSerializer,GerenteSerializer
#en este se importa losserialzer registrados en serializers.py
class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer
    
class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    
class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    
class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
    
class RolViewSet(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer
    
class GerenteViewSet(viewsets.ModelViewSet):
    queryset = Gerente.objects.all()
    serializer_class = GerenteSerializer    