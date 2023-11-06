from django.shortcuts import render
from django.views import generic
from. models import Post

class PostList(generic.ListView):
    model = Post
    queryset = Post.objects.filter(status='published')
    template_name = 'index.html'
    paginate_by = 6
    
# Create your views here.
