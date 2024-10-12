from rest_framework import serializers
from .models import *


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = [
            'title', 
            'url', 
        ]



class EventSerializer(serializers.ModelSerializer):
    locations = LocationSerializer(many=True, read_only=True)
    class Meta:
        model = Event
        fields = [
            "id", 
            "title", 
            'date', 
            'location', # the text describing the location
            'locations',
            'description'                
                  
        ]