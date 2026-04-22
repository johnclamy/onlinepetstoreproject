from django.urls import path
from .views import index, detail


urlpatterns = [
    path('', index, name='products.list'),
    path('<int:id>/', detail, name='products.detail'),
]
