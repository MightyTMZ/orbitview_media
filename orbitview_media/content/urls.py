from django.urls import path
from . import views

urlpatterns = [
    path('articles/all/', views.ArticleList.as_view()),
    path('articles/<str:created_at_date>/<slug:slug>/', views.ArticleDetail.as_view(), name='article-detail'),
    path('articles/<str:created_at_date>/<slug:slug>/preview', views.ArticleContentPreview.as_view(), name='article-preview'),
    path('articles/all/preview/', views.PreviewArticleList.as_view(), name='all-article-preview'),
    
]