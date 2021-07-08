from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .models import Register
from .serializers import RegisterSerializer

# Create your views here.

class RegisterView(ModelViewSet):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer
    # permission_classes = [IsAuthenticated]
