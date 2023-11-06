from django.shortcuts import render, get_object_or_404, reverse
from django.views import generic, View
from. models import Post

class PostList(generic.ListView):
    model = Post
    queryset = Post.objects.filter(status='published')
    template_name = 'index.html'
    paginate_by = 6
