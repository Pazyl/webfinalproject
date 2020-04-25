from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(max_length=10)
    phone = models.CharField(max_length=15)
    birthday = models.DateField()


# class Zaktadki(models.Model):
#     pass
#
#
# class likes(models.Model):
#     pass


class Catalog(models.Model):
    catalogName = models.CharField(max_length=100)
    api = models.CharField(max_length=100)


class Movie(models.Model):
    name = models.CharField(max_length=100)
    alterName = models.CharField(max_length=100)
    catalogType = models.ForeignKey(Catalog, on_delete=models.CASCADE)
    rating = models.FloatField(default=0, validators=[MinValueValidator(0), MaxValueValidator(10)])
    viewCount = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])
    status = models.CharField(default='В работе', max_length=50)
    releaseDate = models.PositiveIntegerField(default=2020, validators=[MinValueValidator(1970)])
    genre = models.TextField(default='')
    studio = models.CharField(max_length=100, default='')
    image1 = models.CharField(max_length=500, default='')
    description = models.TextField(default='')
    ageLimit = models.PositiveSmallIntegerField(default=16, validators=[MaxValueValidator(18), MinValueValidator(0)])
    screen_1_1 = models.CharField(max_length=500, default='')
    screen_1_2 = models.CharField(max_length=500, default='')
    screen_1_3 = models.CharField(max_length=500, default='')
    screen_1_4 = models.CharField(max_length=500, default='')
    screen_1_5 = models.CharField(max_length=500, default='')


class Comment(models.Model):
    userName = models.ForeignKey(User, on_delete=models.CASCADE)
    movieID = models.ForeignKey(Movie, on_delete=models.CASCADE)
    text = models.TextField(default='')


class News(models.Model):
    title = models.TextField(default='')
    poster = models.CharField(max_length=500, default='')
    content = models.TextField(default='')
    publicationTime = models.DateTimeField(auto_now_add=True)
    changeTime = models.DateTimeField(auto_now=True)

