from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Photo(models.Model):
    user = models.ForeignKey(User)
    counter_like = models.IntegerField()
    photo = models.ImageField()


class Comment(models.Model):
    user = models.ForeignKey(User)
    photo_id = models.ForeignKey(Photo)
    comment = models.CharField(max_length=50)
