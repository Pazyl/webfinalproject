from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.models import User
from ..models import Catalog, Movie, Comment, News
from ..serializers import CatalogSerializer, MovieSerializer, CommentSerializer, NewsSerializer


@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def all_catalogs(request):
    if request.method == 'GET':
        catalogs = Catalog.objects.all()                       # [ catalos - это QuerySet ]
        serializer = CatalogSerializer(catalogs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CatalogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
def one_catalog(request, catalog_id):
    try:
        catalog = Catalog.objects.get(id=catalog_id)
    except Catalog.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CatalogSerializer(catalog)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CatalogSerializer(instance=catalog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        catalog.delete()
        return Response({'Deleted': True})


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def all_movies_by_catalog(request, catalog_id):
    if request.method == 'GET':
        try:
            catalog = Catalog.objects.get(id=catalog_id)
        except Catalog.DoesNotExist as e:
            return Response({'error': 'catalog does not exists []'})

        movies = catalog.movie_set.all()

        if movies.__len__() == 0:
            return Response({'info': 'qazir bul [catalog] boyinsha  [movies] JO-O-O-Q'})
        else:
            serializer = MovieSerializer(movies, many=True)
            return Response(serializer.data)


@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def all_movies(request):
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
def one_movie(request, movie_id):
    try:
        movie = Movie.objects.get(id=movie_id)
    except Movie.DoesNotExist as e:
        return Response({'error': 'movie does not exists'})

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MovieSerializer(instance=movie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        movie.delete()
        return Response({'Deleted': True})


# @api_view(['GET'])
def top_movies(request):
    if request.method == 'GET':
        top_movies = Movie.objects.order_by('-salary')[0:10]
        serializer = MovieSerializer(top_movies, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def all_comments(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
def one_comment(request, comment_id):
    try:
        comment = Comment.objects.get(id=comment_id)
    except Comment.DoesNotExist as e:
        return Response({'error': 'comment does not exists'})

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CommentSerializer(instance=comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        comment.delete()
        return Response({'Deleted': True})


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def all_comments_by_movie(request, movie_id):
    if request.method == 'GET':
        try:
            movie = Movie.objects.get(id=movie_id)
        except Movie.DoesNotExist as e:
            return Response({'error': 'movie does not exists []'})

        comments = movie.comment_set.all()

        if comments.__len__() == 0:
            return Response({'info': 'qazir bul [movie] boyinsha  [comments] JO-O-O-Q'})
        else:
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data)


@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def all_news(request):
    if request.method == 'GET':
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = NewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
def one_news(request, news_id):
    try:
        news = News.objects.get(id=news_id)
    except News.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = NewsSerializer(news)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = NewsSerializer(instance=news, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        news.delete()
        return Response({'Deleted': True})

