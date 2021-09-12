from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponse

def calculate():
    x = 1
    y = 2
    return x + y

def say_hello(request):
    return render(request, 'hello.html', {'name':'Something'})

@login_required
def my_protected_view(request):
    """A view that can only be accessed by logged-in users"""
    return render(request, 'protected.html', {'current_user': request.user})