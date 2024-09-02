from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer
from rest_framework import serializers
from .models import WaitlistMember

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'username', 'password', 'email', 'phone','first_name', 'last_name', 'membership_tier', "profile_pic"]


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'email', 'phone', 'profile_pic', 'subscription_expiry', 'membership_tier']



class WaitlistMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaitlistMember
        fields = [
            "first_name", 
            'last_name', 
            'email'
        ]