from . import views
from django.urls import path


urlpatterns = [
    path('categories/', views.category_list),
    path('categories/<int:pk>/', views.category_detail),
    path('posts/', views.post_list),
    path('posts/<int:pk>/', views.post_detail),
]
