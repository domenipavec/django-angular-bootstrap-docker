from django.conf import settings
from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # API ESSENTIALS
    url(r'^api/token-auth/', 'rest_framework_jwt.views.obtain_jwt_token'),
    url(r'^api/docs/', include('rest_framework_swagger.urls')),

    # MEDIA PATH
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),

    # ADMIN PATH
    url(r'^admin/', include(admin.site.urls)),

    # CORE URLS
    url(r'^', include('core.urls')),
)
