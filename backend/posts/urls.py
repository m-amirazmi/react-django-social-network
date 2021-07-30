from django.urls import path
from posts.views import PersonList, PersonDetail, PostList, PostDetail, CommentList, CommentDetail

urlpatterns = [
    path('posts/', PostList.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
    path('persons/', PersonList.as_view()),
    path('persons/<int:pk>/', PersonDetail.as_view()),
    path('comments/', CommentList.as_view()),
    path('comments/<int:pk>/', CommentDetail.as_view()),
]
