from django.db import models
from datetime import datetime
from django.contrib.auth.models import User


class Person(models.Model):

    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    dob = models.DateTimeField(default=datetime.now)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, default='male')
    timestamp_created = models.DateTimeField(auto_now_add=True)
    timestamp_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    owner = models.ForeignKey(Person, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp_created = models.DateTimeField(auto_now_add=True)
    timestamp_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True)
    owner = models.ForeignKey(Person, on_delete=models.SET_NULL, null=True)
    content = models.TextField()
    timestamp_created = models.DateTimeField(auto_now_add=True)
    timestamp_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content
