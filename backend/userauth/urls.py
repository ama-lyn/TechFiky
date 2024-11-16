from .views import *
from .models import *
from django.urls import path, include
from rest_framework import routers

routers = routers.DefaultRouter()
routers.register(r'profile', ProfileView)
routers.register(r'user', UserView)
urlpatterns = [
    path('', include(routers.urls))
]