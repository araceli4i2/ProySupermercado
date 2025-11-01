"""
URL configuration for ProySupermercado project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
   # path('productos/', include('inventario.urls')), esto es para el metodo con views
    path('api/Inventario/', include('inventario.urls')),
    path('api/Personas/', include('personas.urls')),
    path('api/Sucursales/', include('sucursales.urls')),
    path('api/Compras/', include('compras.urls')),
    path('api/Ventas/', include('ventas.urls')),
]
