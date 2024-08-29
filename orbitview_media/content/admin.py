from django.contrib import admin
from .models import *




@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'slug',
        'subtitle',
        'content',
        'created_at',
        'updated_at',
        'is_published',  # used to adjust the visibility to the users
        'featured_image'
    )


