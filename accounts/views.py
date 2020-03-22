from django.shortcuts import render 

from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.urls import reverse

# Create your views here.
def test(request):
    return HttpResponse('This is test')