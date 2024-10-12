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
from .pagination import ArticlePagination
    


# All the articles (regardless of the type: Blog, Technical Article, or White Paper)
class ArticleList(generics.ListAPIView):
    queryset = Article.objects.all().order_by("-updated_at")
    serializer_class = ArticleSerializer
    permission_classes = [] # no authentication requirements for viewing a blog
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['title', 'content', 'category__title', 'authors__first_name', 'authors__last_name']
    pagination_class = ArticlePagination


# Individual view of each article regardless of the type (Blog, Technical Article, or White Paper)
class ArticleDetail(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [] # no authentication requirements for viewing a blog

    def get_object(self):
        created_at_date = self.kwargs['created_at_date']
        slug = self.kwargs['slug']

        # Use __date to compare the date part only
        return get_object_or_404(Article, created_at__date=created_at_date, slug=slug)
    

# The most recent three articles (regardless of the type)
class FirstArticlePreviews(generics.RetrieveAPIView):
    queryset = Article.objects.all()[0:3]
    permission_classes = [] # no permission classes
    # gives unauthenticated users a preview of articles


'''class ArticleContentPreview(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = PreviewArticleSerializer
    permission_classes = [] # since we are giving the users a preview of the articles, we must not enable any permission classes to view these

    def get_object(self):
        created_at_date = self.kwargs['created_at_date']
        slug = self.kwargs['slug']

        article = get_object_or_404(Article, created_at__date=created_at_date, slug=slug)
        return article
        
class PreviewArticleList(generics.ListAPIView):
    queryset = Article.objects.all().order_by("-updated_at")
    serializer_class = PreviewArticleSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['title', 'content', 'category__title', 'authors__first_name', 'authors__last_name']
    '''

    

class ArticleBaseDetailView(generics.RetrieveAPIView):
    serializer_class = ArticleSerializer
    permission_classes = []  # no need for permission classes for now

    def get_object(self):
        created_at_date = self.kwargs['created_at_date']
        slug = self.kwargs['slug']
        label = self.label

        return get_object_or_404(Article, created_at__date=created_at_date, slug=slug, label=label)


# WhitePaper Views
class WhitePaperList(generics.ListAPIView):
    queryset = Article.objects.filter(label="WP").order_by("-created_at")
    serializer_class = ArticleSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['title', 'content', 'category__title', 'authors__first_name', 'authors__last_name']
    pagination_class = ArticlePagination


class WhitePaperDetail(ArticleBaseDetailView):
    label = "WP"


# Blog Views
class BlogList(generics.ListAPIView):
    queryset = Article.objects.filter(label="B").order_by("-created_at")
    serializer_class = ArticleSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['title', 'content', 'category__title', 'authors__first_name', 'authors__last_name']
    pagination_class = ArticlePagination


class BlogDetail(ArticleBaseDetailView):
    label = "B"


# Technical Article Views
class TechnicalArticleList(generics.ListAPIView):
    queryset = Article.objects.filter(label="TA").order_by("-created_at")
    serializer_class = ArticleSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['title', 'content', 'category__title', 'authors__first_name', 'authors__last_name']
    pagination_class = ArticlePagination


class TechnicalArticleDetail(ArticleBaseDetailView):
    label = "TA"