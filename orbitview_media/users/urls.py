from django.urls import path
from . import views

urlpatterns = [
    path("waitlist/", views.WaitlistMemberList.as_view(), name="waitlist")
]