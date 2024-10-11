from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateTimeField()
    location = models.CharField(max_length=255)
    """location_url1 = models.CharField(max_length=2083) # e.g. you have a Google Maps link
    location_url2 = models.CharField(max_length=2083, null=True, blank=True) # e.g. you have a IOS Maps link
    location_url3 = models.CharField(max_length=2083, null=True, blank=True) # e.g. you have a Google Maps link"""
    description = models.TextField()


class Location(models.Model):
    title = models.CharField(max_length=255)
    url = models.CharField(max_length=2083)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="locations")

    
