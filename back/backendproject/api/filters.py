from django_filters import rest_framework as filters
from api.models import Movie, Catalog, Comment, News


class MovieFilter(filters.FilterSet):
    name_like = filters.CharFilter(field_name='name', lookup_expr='contains')

    catalog_id = filters.CharFilter(field_name='catalogType_id', lookup_expr='exact')

    rDate = filters.NumberFilter(field_name='releaseDate', lookup_expr='exact')
    min_rDate = filters.NumberFilter(field_name='releaseDate', lookup_expr='gte')
    max_price = filters.NumberFilter(field_name='releaseDate', lookup_expr='lte')
    studio = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Movie
        fields = ('name', 'releaseDate', 'catalogType_id', 'status', 'studio')
