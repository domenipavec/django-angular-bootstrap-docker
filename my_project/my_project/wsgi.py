"""
WSGI config for my_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""

import os
import settings

settings_dir = '.'.join((settings.PROJECT_DIR_NAME, 'settings'))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", settings_dir)

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
