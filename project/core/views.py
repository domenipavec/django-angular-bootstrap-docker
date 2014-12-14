from django.shortcuts import render
from django.conf import settings

def index(request):
    template = 'core/index.html'
    context = {'DEBUG': settings.DEBUG}
    return render(request, template, context)
