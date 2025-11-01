from rest_framework import serializers
from .models import Persona,Empleado,Cliente,Proveedor,Rol,Gerente

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'
        
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'
        
class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor    
        fields = '__all__'
class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'
        
class GerenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gerente    
        fields = '__all__'