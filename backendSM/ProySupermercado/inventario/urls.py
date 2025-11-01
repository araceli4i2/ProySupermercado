# apps/productos/urls.py
#from django.urls import path,include
#from .views import ProductoListView, ProductoCreateView, ProductoUpdateView, ProductoDeleteView
from .api import ProductoViewSet,CategoriaViewSet,InventarioViewSet,HistorialMovimientoViewSet
from rest_framework import routers
#from rest_framework.routers import DefaultRouter


router = routers.DefaultRouter()
router.register('productos', ProductoViewSet)
router.register('categorias', CategoriaViewSet)
router.register('inventario', InventarioViewSet)
router.register('historial_movimiento', HistorialMovimientoViewSet)

urlpatterns = router.urls
#[
   # path('', ProductoListView.as_view(), name='producto_list'),
    #path('crear/', ProductoCreateView.as_view(), name='producto_create'),
    #path('editar/<int:pk>/', ProductoUpdateView.as_view(), name='producto_update'),
    #path('eliminar/<int:pk>/', ProductoDeleteView.as_view(), name='producto_delete'),
 #   path('', include(router.urls)),]
