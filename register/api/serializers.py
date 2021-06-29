from rest_framework import serializers
from .models import Register

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ('id', 'code', 'color', 'create_date', 'last_update')