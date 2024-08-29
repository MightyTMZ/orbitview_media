from rest_framework import serializers
from .models import Article, Annoucement, Author


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = [
            'first_name',
            'last_name', 
            'profile_picture_url'
        ]


class ArticleSerializer(serializers.ModelSerializer):
    
    authors = AuthorSerializer(many=True, read_only=True)
    
    class Meta:
        model = Article
        fields = [
            'title',
            'slug',
            'subtitle',
            'authors',
            'content',
            'created_at',
            'updated_at',
            'is_published',  # used to adjust the visibility to the users
            'featured_image'
        ]


class AnnoucementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            'title',
            'cover_img',
            'description',
            'created_at',
            'updated_at',
        ]


