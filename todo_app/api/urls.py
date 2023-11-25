from django.urls import path
from .views import main, TodoViewSet

urlpatterns = [
    path("", main),
    path("todo", TodoViewSet.as_view({"get": "list"})),
]
