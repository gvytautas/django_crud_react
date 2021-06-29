from django.shortcuts import render

# Create your views here.

def app(request):
    return render(request, 'frontend/index.html')