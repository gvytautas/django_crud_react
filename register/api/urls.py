from django.urls import path
from .views import RegisterView

register_list = RegisterView.as_view({
    'get': 'list',
    'post': 'create'
})

register_detail = RegisterView.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = [
    path('register/<int:pk>', register_detail, name='register-detail'),
    path('register', register_list, name='register-list'),
]
