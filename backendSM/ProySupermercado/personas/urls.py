from .api import PersonaViewSet,EmpleadoViewSet,ClienteViewSet,ProveedorViewSet,RolViewSet,GerenteViewSet
from rest_framework import routers
#from rest_framework.routers import DefaultRouter


router = routers.DefaultRouter()
router.register('persona', PersonaViewSet)
router.register('empleado', EmpleadoViewSet)
router.register('cliente', ClienteViewSet)
router.register('proveedor', ProveedorViewSet)
router.register('rol', RolViewSet)
router.register('gerente', GerenteViewSet)

urlpatterns = router.urls