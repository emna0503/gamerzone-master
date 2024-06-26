from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/',include('users.urls')),
    path('chat/',include('chats.urls')),
    path('comments/',include('comments.urls')),
    path('notifications/',include('notifications.urls')),
    path('posts/',include('posts.urls')),
    path('todo/',include('todo.urls')),
    path('groups/', include ('groups.urls')),
    path('story/', include ('story.urls')),
    path('saved/', include ('saved.urls')),
    path('reports/', include ('reports.urls')),
    path('dashboard/', include ('dashboard.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
