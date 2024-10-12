from django.urls import path
from . import views

urlpatterns = [
    path('articles/', views.ArticleList.as_view(), name='article-list'),  # Article List
    path('articles/<str:created_at_date>/<slug:slug>/', views.ArticleDetail.as_view(), name='article-detail'),  # Article Detail

    path('articles/blog/', views.BlogList.as_view(), name="blog-list"),  # Blog List
    path('articles/blog/<str:created_at_date>/<slug:slug>/', views.BlogDetail.as_view(), name="blog-detail"),  # Blog Detail

    path('articles/technical-articles/', views.TechnicalArticleList.as_view(), name="technical-articles-list"),  # Technical Articles List
    path('articles/technical-articles/<str:created_at_date>/<slug:slug>/', views.TechnicalArticleDetail.as_view(), name="technical-articles-detail"),  # Technical Articles Detail

    path('articles/white-papers/', views.WhitePaperList.as_view(), name="white-papers-list"),  # White Papers List
    path('articles/white-papers/<str:created_at_date>/<slug:slug>/', views.WhitePaperDetail.as_view(), name="white-papers-detail"),  # White Papers Detail

    # path('articles/<str:created_at_date>/<slug:slug>/preview', views.ArticleContentPreview.as_view(), name='article-preview'), 
    # path('articles/all/preview/', views.PreviewArticleList.as_view(), name='all-article-preview'),
    # No need for Article (blogs, technical articles, white papers) preview --> paid articles will be hosted on a completely different server/application
    
]