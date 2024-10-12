from django.contrib import admin
from .models import *


class LocationInline(admin.StackedInline):
    model = Location
    extra = 2


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):

    inlines = [LocationInline]