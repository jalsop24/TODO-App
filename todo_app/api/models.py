from django.db import models


# Create your models here.
class TodoItem(models.Model):
    body = models.TextField()
    completed = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
