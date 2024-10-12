from rest_framework import serializers
from .models import Job, JobApplication, JobTag

class JobTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobTag
        fields = [
            'id',
            'title'
        ]



class JobSerializer(serializers.ModelSerializer):

    tags = JobTagSerializer(many=True, read_only=True)

    class Meta:
        model = Job
        fields = [
            'id', 'title', 'description', 'responsibilities', 'qualifications',
            'benefits', 'employment_type', 'salary_description', 'location',
            'is_active', 'posted_on', 'application_deadline', 'experience_level', 
            'slug', 'tags'
        ]

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['id', 'job', 'first_name', 'last_name', 'email', 'linkedin_profile_url', 'additional_info', 'submitted_time']
        read_only_fields = ['job', 'submitted_time']
