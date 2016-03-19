FROM python:3

RUN apt-get -y update \
 && apt-get -y upgrade \
 && apt-get -y --force-yes install nano less npm \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm cache clean -f \
 && npm install -g n \
 && n stable \
 && npm install npm -g \
 && npm cache clean

RUN mkdir /app
WORKDIR /app

RUN npm -g install bower gulp \
 && npm cache clean

COPY package.json /app/
RUN npm install \
 && npm cache clean

COPY bower.json /app/
RUN bower install --allow-root

COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . /app/
RUN cp /app/project/project/localsettings.py.prod /app/project/project/localsettings.py

RUN mkdir /app/staticfiles
RUN gulp build-js-production
RUN python project/manage.py collectstatic --noinput

EXPOSE 8000

CMD ["bash", "-c", "python project/manage.py migrate && uwsgi --ini /app/uwsgi.ini"]
