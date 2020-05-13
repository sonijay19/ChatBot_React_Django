from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView


class ApiOne(APIView):
    def get(self, request, *arg, **kwargs):
        data = {
            'message': str(request.GET['message']),
            'response': 'We are do it'
        }
        return Response(data)
