from django.urls import path
from . import views

urlpatterns = [
    # List of all active jobs
    path('jobs/', views.JobListView.as_view(), name='job-list'),
    
    # Details of a specific job
    path('jobs/<slug:slug>/', views.JobDetailView.as_view(), name='job-detail'),
    
    # Submit a job application for a specific job
    path('jobs/<slug:slug>/apply/', views.JobApplicationCreateView.as_view(), name='job-apply'),

    # Optional: List job applications for a specific job (admin-only)
    path('jobs/<slug:slug>/applications/', views.JobApplicationListView.as_view(), name='job-applications'),
]
