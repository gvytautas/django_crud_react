from django.core.validators import RegexValidator
from django.db import models

# Create your models here.

class Register(models.Model):
    code = models.CharField(max_length=6, unique=True, null=False, blank=False, validators=[
                                      RegexValidator(r'^[A-Z]{3}?[0-9]{3}$')
                                  ])
    color = models.CharField(max_length=20)
    create_date = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)