from django.urls import path
from . import views


urlpatterns = [
    path('events/', views.EventList.as_view(), name="event-list"),
    path('events/<int:id>', views.EventList.as_view(), name="event-list")
]