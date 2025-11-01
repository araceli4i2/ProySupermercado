
from django.shortcuts import get_object_or_404, redirect, render
from django.views import View
from .models import Producto,Categoria
from .forms import ProductoForm 
# Necesitamos crear un formulario esto es para el metodo con views

# Listar productos
class ProductoListView(View):
    def get(self, request):
        productos = Producto.objects.all()
        return render(request, 'inventario/producto_list.html', {'productos': productos})

# Crear producto
class ProductoCreateView(View):
    def get(self, request):
        form = ProductoForm()
        return render(request, 'inventario/producto_form.html', {'form': form})

    def post(self, request):
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('producto_list')
        return render(request, 'inventario/producto_form.html', {'form': form})

# Actualizar producto
class ProductoUpdateView(View):
    def get(self, request, pk):
        producto = get_object_or_404(Producto, pk=pk)
        form = ProductoForm(instance=producto)
        return render(request, 'inventario/producto_form.html', {'form': form})

    def post(self, request, pk):
        producto = get_object_or_404(Producto, pk=pk)
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('producto_list')
        return render(request, 'inventario/producto_form.html', {'form': form})

# Eliminar producto
class ProductoDeleteView(View):
    def get(self, request, pk):
        producto = get_object_or_404(Producto, pk=pk)
        return render(request, 'inventario/producto_confirm_delete.html', {'producto': producto})

    def post(self, request, pk):
        producto = get_object_or_404(Producto, pk=pk)
        producto.delete()
        return redirect('producto_list')
    

