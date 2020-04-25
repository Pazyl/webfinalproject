from .models import Catalog, Movie, Comment, News
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'is_superuser', 'username', 'first_name', 'last_name', 'email', 'is_active', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True},
                        'is_superuser': {'read_only': True, 'required': False}}


class CatalogSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    catalogName = serializers.CharField(required=True)
    api = serializers.CharField(required=True)

    def create(self, validated_data):
        catalog = Catalog(**validated_data)
        catalog.save()
        return catalog

    def update(self, instance, validated_data):
        instance.catalogName = validated_data.get('catalogName', instance.catalogName)
        instance.api = validated_data.get('api', instance.api)
        instance.save()
        return instance


class MovieSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    alterName = serializers.CharField(required=True)
    catalogType = CatalogSerializer(read_only=True)
    catalogType_id = serializers.IntegerField(write_only=True)
    rating = serializers.FloatField(required=False)
    viewCount = serializers.IntegerField(required=False)
    status = serializers.CharField(required=False)
    releaseDate = serializers.IntegerField(required=True)
    genre = serializers.CharField(required=False)
    studio = serializers.CharField(required=False)
    image1 = serializers.CharField(required=True)
    description = serializers.CharField(required=False)
    ageLimit = serializers.IntegerField(required=False)
    screen_1_1 = serializers.CharField(required=False)
    screen_1_2 = serializers.CharField(required=False)
    screen_1_3 = serializers.CharField(required=False)
    screen_1_4 = serializers.CharField(required=False)
    screen_1_5 = serializers.CharField(required=False)

    class Meta:
        model = Movie
        fields = ('id', 'name', 'alterName', 'catalogType', 'catalogType_id', 'rating', 'viewCount', 'status',
                  'releaseDate', 'genre', 'studio', 'image1', 'description', 'ageLimit', 'screen_1_1', 'screen_1_2',
                  'screen_1_3', 'screen_1_4', 'screen_1_5')
        # fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    userName = UserSerializer(read_only=True)
    userName_id = serializers.IntegerField(write_only=True)
    movieID = MovieSerializer(read_only=True)
    movieID_id = serializers.IntegerField(write_only=True)
    text = serializers.CharField(required=True)

    class Meta:
        model = Comment
        fields = ('id', 'userName', 'userName_id', 'movieID', 'movieID_id', 'text')


class NewsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True)
    poster = serializers.CharField(required=True)
    content = serializers.CharField(required=True)
    publicationTime = serializers.DateTimeField(read_only=True)
    changeTime = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        news = News(**validated_data)
        news.save()
        return news

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.poster = validated_data.get('poster', instance.poster)
        instance.content = validated_data.get('content', instance.content)
        instance.publicationTime = validated_data.get('publicationTime', instance.publicationTime)
        instance.changeTime = validated_data.get('changeTime', instance.changeTime)
        instance.save()
        return instance
