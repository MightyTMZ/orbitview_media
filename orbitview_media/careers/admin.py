from django.contrib import admin
from .models import *


"""class JobTagInline(admin.StackedInline):
    model = JobTag
    extra = 2"""

# NOT a foreign key!!!!!



admin.site.register(JobTag)
admin.site.register(Job)
admin.site.register(JobApplication)