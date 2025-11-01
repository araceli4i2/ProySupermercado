from .api import CompraViewSet,DetalleCompraViewSet
from rest_framework import routers
#from rest_framework.routers import DefaultRouter


router = routers.DefaultRouter()
router.register('compra', CompraViewSet)
router.register('compra_detalle', DetalleCompraViewSet)

urlpatterns = router.urls