from .api import SucursalViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('sucursal', SucursalViewSet)

urlpatterns = router.urls