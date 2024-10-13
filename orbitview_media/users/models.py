from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    MEMBERSHIP_CHOICES = [
        ('free', 'Free'),
        ('insider', 'Insider Advantage'),
        ('all_access', 'All Access')
    ]
    membership_tier = models.CharField(max_length=20, choices=MEMBERSHIP_CHOICES, default='free')
    subscription_expiry = models.DateField(null=True, blank=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=12, blank=True, null=True) # may use a phone API to do authentication in the future
    default_pfp_url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
    profile_pic = models.CharField(max_length=2083, default=default_pfp_url)



class WaitlistMember(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True)

    def __str__(self) -> str:
        return self.email