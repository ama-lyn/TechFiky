from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    tech_stack = models.CharField(max_length=500)
    experience =models.CharField(max_length=100)
    availabitlity = models.BooleanField(default=True)
    goals = models.CharField(max_length=500)
    Preferences = models.CharField(max_length=100)
    hobbies = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    