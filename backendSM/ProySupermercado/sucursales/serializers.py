from .models import Sucursal
from rest_framework import serializers

class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = '__all__'