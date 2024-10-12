from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *
from .pagination import EventPagination

class EventList(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['title', 'location', 'description']
    pagination_class = EventPagination


class EventDetail(generics.RetrieveAPIView):
    serializer_class = EventSerializer
    permission_classes = []

    def get_object(self):
        id = self.kwargs['id']

        return get_object_or_404(Event, id=id)