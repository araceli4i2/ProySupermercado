from .api import VentaViewSet,DetalleVentaViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('venta', VentaViewSet)
router.register('venta_detalle', DetalleVentaViewSet)

urlpatterns = router.urls