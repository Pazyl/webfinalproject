from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, filters
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from django.contrib.auth.models import User
from ..models import Catalog, Movie, Comment, News
from ..serializers import UserSerializer, CatalogSerializer, MovieSerializer
from ..filters import MovieFilter


# from django_filters.rest_framework import DjangoFilterBackend
# from ..filters import MovieFilter
# from rest_framework import filters
# from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination


class UserListAPIView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserDetailAPIView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get_object(self, user_id):
        try:
            return User.objects.get(id=user_id)
        except User.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, user_id):
        user = self.get_object(user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, user_id):
        user = self.get_object(user_id)
        serializer = UserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, user_id):
        user = self.get_object(user_id)
        user.delete()
        return Response({'deleted': True})


class CatalogListAPIView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        catalogs = Catalog.objects.all()
        serializer = CatalogSerializer(catalogs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CatalogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CatalogDetailAPIView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get_object(self, catalog_id):
        try:
            return Catalog.objects.get(id=catalog_id)
        except Catalog.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, catalog_id):
        catalog = self.get_object(catalog_id)
        serializer = CatalogSerializer(catalog)
        return Response(serializer.data)

    def put(self, request, catalog_id):
        catalog = self.get_object(catalog_id)
        serializer = CatalogSerializer(instance=catalog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, catalog_id):
        catalog = self.get_object(catalog_id)
        catalog.delete()
        return Response({'deleted': True})


class AllMoviesByCatalogAPUView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, catalog_id):
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

    def post(self, request, catalog_id):
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class MovieListAPIView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class MovieDetailAPIView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get_object(self, movie_id):
        try:
            return Movie.objects.get(id=movie_id)
        except Movie.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, movie_id):
        movie = self.get_object(movie_id)
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

    def put(self, request, movie_id):
        movie = self.get_object(movie_id)
        serializer = MovieSerializer(instance=movie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, movie_id):
        movie = self.get_object(movie_id)
        movie.delete()
        return Response({'deleted': True})


class MoviesFinishedReleasesListAPIView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        top_movies = Movie.objects.filter(status='Завершен')
        serializer = MovieSerializer(top_movies, many=True)
        return Response(serializer.data)


class TopMoviesByRatingListAPIView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, catalog_id):
        try:
            catalog = Catalog.objects.get(id=catalog_id)
        except Catalog.DoesNotExist as e:
            return Response({'error': 'catalog does not exists []'})

        movies = catalog.movie_set.all().order_by('-rating')

        if movies.__len__() == 0:
            return Response({'info': 'qazir bul [catalog] boyinsha  [movies] JO-O-O-Q'})
        else:
            serializer = MovieSerializer(movies, many=True)
            return Response(serializer.data)


class TopMoviesListAPIView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        top_movies = Movie.objects.order_by('-rating')
        serializer = MovieSerializer(top_movies, many=True)
        return Response(serializer.data)


class MovieSearchList(generics.ListAPIView):
    # permission_classes = (IsAuthenticated,)
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    # pagination_class = PageNumberPagination
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_class = MovieFilter
    # filterset_fields = ('name', 'releaseDate', 'catalogType_id')
    search_fields = ('name',)
    ordering_fields = ('name', 'catalogType_id', 'releaseDate', 'status', 'studio')
    ordering = ('name')


# class MovieListCatalogAPIView(generics.ListCreateAPIView):
#     serializer_class = MovieSerializer
#     queryset = Movie.objects.all()
#     # permission_classes = (IsAuthenticated,)
#     filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
#     # pagination_class = PageNumberPagination
#     # pagination_class = LimitOffsetPagination
#     # filterset_fields = ('name', 'releaseDate',)
#     filter_class = MovieFilter
#     # search_fields = ('name', 'releaseDate',)
#     # ordering_fields = ('name', 'releaseDate')
#     # ordering = ('name')


