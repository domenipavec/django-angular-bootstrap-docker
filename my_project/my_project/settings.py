# !/usr/bin/python

import os

PROJECT_DIR_NAME = 'my_project'

# CUSTOM PATH SETTINGS
PROJECT_DIR = os.path.dirname(os.path.dirname(__file__))
REPO_DIR = os.path.realpath(os.path.join(PROJECT_DIR, '..'))
HOME_DIR = os.path.realpath(os.path.join(REPO_DIR, '..'))
STATIC_DIR = os.path.realpath(os.path.join(HOME_DIR, 'staticfiles'))
MEDIA_DIR = os.path.realpath(os.path.join(HOME_DIR, 'media'))

# Generate a secret_key at: http://www.miniwebtool.com/django-secret-key-generator/
SECRET_KEY = 'MY_REALLY_SECRET_KEY'

DEBUG = True
TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []

INSTALLED_APPS = (
    # Django
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third part
    'rest_framework',
    'rest_framework_swagger',
    'autoslug',

    # Apps
    'core',
)

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.doc.XViewMiddleware',
    'django.middleware.common.CommonMiddleware',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.contrib.messages.context_processors.messages',
    'django.core.context_processors.i18n',
    'django.core.context_processors.request',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
)

ROOT_URLCONF = '.'.join((PROJECT_DIR_NAME, 'urls'))
WSGI_APPLICATION = '.'.join((PROJECT_DIR_NAME, 'wsgi.application'))


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(PROJECT_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True


# Staticfiles settings
STATIC_ROOT = STATIC_DIR
STATIC_URL = "/static/"

STATICFILES_DIRS = (
    os.path.join(REPO_DIR, "staticfiles"),
    os.path.join(REPO_DIR, "bower_components"),
)

# Media settings
MEDIA_ROOT = MEDIA_DIR
MEDIA_URL = "/media/"

# Template settings
TEMPLATE_DIRS = (os.path.join(PROJECT_DIR, 'templates'),)

if DEBUG:
    print 'PROJECT_DIR:', PROJECT_DIR
    print 'REPO_DIR:', REPO_DIR
    print 'HOME_DIR:', HOME_DIR
    print 'STATIC_DIR:', STATIC_DIR
    print 'MEDIA_DIR:', MEDIA_DIR