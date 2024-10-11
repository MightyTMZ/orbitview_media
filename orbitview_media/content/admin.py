from django.contrib import admin
from .models import *


admin.site.register(Annoucement)
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = [
        "title", 
        "created_at", 
        'is_published',
        "featured_image"
    ]

admin.site.register(Author)