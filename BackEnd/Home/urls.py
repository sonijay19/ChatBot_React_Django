from django.contrib import admin
from django.urls import path
from Home.views import ApiOne

urlpatterns = [
    path('api/',ApiOne.as_view(),name="Home")
]