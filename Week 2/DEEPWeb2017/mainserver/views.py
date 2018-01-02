# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from mainserver.models import UserProfile
from rest_framework.response import Response
from mainserver.serializers import UserProfileSerializer
from rest_framework.views import APIView
from rest_framework.status import HTTP_202_ACCEPTED

# Create your views here.

class UserProfileView(APIView):

    serializer_class = UserProfileSerializer

    def get(self, request):
        list_of_user_profiles = UserProfile.objects.all()
        i_dont_know_if_it_will_work = UserProfileSerializer(list_of_user_profiles, many = True)
        return Response(i_dont_know_if_it_will_work.data)

    def post(self, request):
        this_is_some_data = UserProfileSerializer(data = request.data)
        this_is_some_data.is_valid(raise_exception = True)
        username_ = this_is_some_data.validated_data['userName']
        description_ = this_is_some_data.validated_data['description']
        gpa_ = this_is_some_data.validated_data['gpa']

        lol = UserProfile(userName = username_, description = description_, gpa = gpa_)
        lol.save()
  
        return Response(status = HTTP_202_ACCEPTED)



def index_page(request):
    list_of_user_profiles = UserProfile.objects.all()
    print(list_of_user_profiles)

    context = {'list_of_user_profiles': list_of_user_profiles}
    return render(request, 'mainserver/index.html', context)

    #return HttpResponse('<h1>This is a bad idea</h1>');

