from django.contrib import admin
from .models import Post, Comment
from django_summernote.admin import SummernoteModelAdmin


@admin.register(Post)
class PostAdmin(SummernoteModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('status', 'created_date')
    list_display = ('title', 'slug', 'status', 'created_date')
    search_fields = ['author']
    summernote_fields = ('content')

@admin.register(Comment)
class CommentAdmin(SummernoteModelAdmin):
    list_display = ('name', 'body', 'created_date')
    list_filter = ('created_date','name')
    search_fields = ['name', 'email', 'body']
