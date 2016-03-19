
import os

from fabric import api
from fabric.context_managers import quiet

CWD = os.path.dirname(os.path.realpath(__file__))

HOSTS = ['46.101.118.152']
IMAGE_NAME = 'boilerplate'
CONTAINER_NAME = 'boilerplate'
LOCAL_PORT = '8000'
CONTAINER_PORT = '8000'
PRODUCTION_HOST = 'boilerplate.host'
LETSENCRYPT_EMAIL = 'domen@ipavec.net'

LOCAL_IMAGE = '/home/domen/{image}.gz'.format(image=IMAGE_NAME)
REMOTE_IMAGE = '/tmp/{image}.gz'.format(image=IMAGE_NAME)

IMAGE_BUILD = 'docker build -t {image} .'.format(image=IMAGE_NAME)
CONTAINER_DEV = 'docker run --rm -it -p {lport}:{cport} -v {cwd}/project:/app/project -v {cwd}/assets:/app/assets --link mysql:mysql --name={container}-dev {image} bash -c "./project/manage.py migrate && (gulp watch & ./project/manage.py runserver 0.0.0.0:{cport})"'.format(image=IMAGE_NAME, cwd=CWD, lport=LOCAL_PORT, cport=CONTAINER_PORT, container=CONTAINER_NAME)

IMAGE_FIND = 'docker images | grep {image}'.format(image=IMAGE_NAME)
IMAGE_TAG_OLD = 'docker tag {image} {image}-old'.format(image=IMAGE_NAME)
IMAGE_RM_OLD = 'docker rmi {image}-old'.format(image=IMAGE_NAME)
IMAGE_LOAD = 'gunzip -c {rimage} | docker load'.format(rimage=REMOTE_IMAGE)
IMAGE_RM_REMOTE = 'rm {rimage}'.format(rimage=REMOTE_IMAGE)
IMAGE_SAVE = 'docker save {image} | gzip > {limage}'.format(image=IMAGE_NAME, limage=LOCAL_IMAGE)
IMAGE_RM_LOCAL = 'rm {limage}'.format(limage=LOCAL_IMAGE)

CONTAINER_FIND = 'docker ps | grep {container}'.format(container=CONTAINER_NAME)
CONTAINER_RENAME_OLD = 'docker rename {container} {container}-old'.format(container=CONTAINER_NAME)
CONTAINER_STOP_OLD = 'docker stop {container}-old'.format(container=CONTAINER_NAME)
CONTAINER_RM_OLD = 'docker rm -v {container}-old'.format(container=CONTAINER_NAME)
CONTAINER_PRODUCTION = 'docker run -d -e "VIRTUAL_HOST={host}" -e "LETSENCRYPT_HOST={host}" -e "LETSENCRYPT_EMAIL={email}" --link mysql:mysql --restart=always --name={container} {image}'.format(image=IMAGE_NAME, container=CONTAINER_NAME, host=PRODUCTION_HOST, email=LETSENCRYPT_EMAIL)


def build():
    with quiet():
        hasOldImage = len(api.local(IMAGE_FIND, capture=True)) > 0

    if hasOldImage:
        api.local(IMAGE_TAG_OLD)

    api.local(IMAGE_BUILD)

    if hasOldImage:
        api.local(IMAGE_RM_OLD)

def dev():
    build()

    api.local(CONTAINER_DEV)


def _deploy():
    hasOldImage = len(api.run(IMAGE_FIND, quiet=True)) > 0
    hasRunning = len(api.run(CONTAINER_FIND, quiet=True)) > 0

    if hasOldImage:
        api.run(IMAGE_TAG_OLD)

    api.put(LOCAL_IMAGE, REMOTE_IMAGE)
    api.run(IMAGE_LOAD)
    api.run(IMAGE_RM_REMOTE)

    if hasRunning:
        api.run(CONTAINER_RENAME_OLD)

    api.run(CONTAINER_PRODUCTION)

    if hasRunning:
        api.run(CONTAINER_STOP_OLD)
        api.run(CONTAINER_RM_OLD)

    if hasOldImage:
        api.run(IMAGE_RM_OLD)


def deploy():
    build()

    api.local(IMAGE_SAVE)

    api.execute(_deploy, hosts=HOSTS)

    api.local(IMAGE_RM_LOCAL)
