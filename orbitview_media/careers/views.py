from rest_framework import generics, permissions
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Job, JobApplication
from .serializers import JobSerializer, JobApplicationSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.throttling import ScopedRateThrottle # We have to throttle the rate to 3 job applications per hour per user


# List of all jobs with filtering
class JobListView(generics.ListAPIView):
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ['title', 'description', 'responsibilities', 'location', 'tags__title']
    filterset_fields = ['employment_type', 'experience_level', 'location']


# Retrieve detailed information for a job
class JobDetailView(generics.RetrieveAPIView):
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'

    def get_object(self):
        slug = self.kwargs.get('slug')
        job = get_object_or_404(Job, slug=slug, is_active=True)
        return job


# Create a job application for a specific job
class JobApplicationCreateView(generics.CreateAPIView):
    serializer_class = JobApplicationSerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [ScopedRateThrottle]

    def perform_create(self, serializer):
        job_slug = self.kwargs.get('slug')
        job = get_object_or_404(Job, slug=job_slug)
        serializer.save(job=job)


# Optional: List all applications for a specific job (admin-only view)
class JobApplicationListView(generics.ListAPIView):
    serializer_class = JobApplicationSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        job_slug = self.kwargs.get('slug')
        job = get_object_or_404(Job, slug=job_slug)
        return JobApplication.objects.filter(job=job)
