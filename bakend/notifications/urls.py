from django.urls import path, include
from .views import NotificationAPIView

urlpatterns = [
    path('',NotificationAPIView.as_view()),
    path('post',NotificationAPIView.as_view()),
]