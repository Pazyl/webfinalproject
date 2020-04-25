from django.urls import path
from .views.views_cbv import UserListAPIView, UserDetailAPIView, MovieSearchList, MoviesFinishedReleasesListAPIView
from .views.views_cbv import CatalogListAPIView, CatalogDetailAPIView, AllMoviesByCatalogAPUView
from .views.views_cbv import MovieListAPIView, MovieDetailAPIView, TopMoviesListAPIView, TopMoviesByRatingListAPIView
from .views.views_fbv import all_comments, one_comment, all_comments_by_movie, all_news, one_news

from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    path('login/', obtain_jwt_token),

    path('users/', UserListAPIView.as_view()),
    path('users/<int:user_id>/', UserDetailAPIView.as_view()),

    path('catalogs/', CatalogListAPIView.as_view()),
    path('catalogs/<int:catalog_id>/', CatalogDetailAPIView.as_view()),
    path('catalogs/<int:catalog_id>/movies/', AllMoviesByCatalogAPUView.as_view()),

    path('movies/', MovieListAPIView.as_view()),
    path('movies/<int:movie_id>/', MovieDetailAPIView.as_view()),
    path('movies/top_ten/', TopMoviesListAPIView.as_view()),
    path('movies/<int:movie_id>/comments/', all_comments_by_movie),
    path('movies/<int:catalog_id>/mostPopular/', TopMoviesByRatingListAPIView.as_view()),
    path('movies/FinishedReleases/', MoviesFinishedReleasesListAPIView.as_view()),

    path('comments/', all_comments),
    path('comments/<int:comment_id>/', one_comment),

    path('news/', all_news),
    path('news/<int:news_id>/', one_news),

    path('search/movies/', MovieSearchList.as_view())
]
