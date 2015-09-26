django-angular-bootstrap-boilerplate
====================================

This is a modified version from https://github.com/iktw/django-angular-bootstrap-boilerplate, modified with newer versions, python3, less instead of sass, source maps, ...
This is a boilerplate to quickly get started with your django project. The main includes of this boilerplate is Django, AngularJs and bootstrap.

What's included?
-
* Django 1.8.4
* Django REST framework
* Django REST Swagger
* Django REST JWT
* Django enumerify
* Django autoslug
* Django filter
* Markdown
* Pillow
* Sorl thumbnail
* Gulp
* Bower
* AngularJS
* AngularJS Bootstrap
* AngularJS Ui router
* Restangular
* Angular Translate
* Lodash
* jQuery
* Bootstrap

On ubuntu update node and npm
-
* $ sudo npm cache clean -f
* $ sudo npm install -g n
* $ sudo n stable
* $ sudo npm install npm -g

Setting up Django
-
* $ mkdir myprojectdir
* $ cd myprojectdir
* $ virtualenv env --dist
* $ source env/bin/activate
* $ git clone https://github.com/matematik7/django-angular-bootstrap-boilerplate.git
* $ cd django-angular-bootstrap-boilerplate
* $ mv django-angular-bootstrap-boilerplate/ myproject/
* $ pip3 install -r requirements.txt (Remeber to stand in your env)
* Generate a SECRET_KEY at http://www.miniwebtool.com/django-secret-key-generator/
* Update SECRET_KEY in settings.py
* $ ./manage.py migrate
* $ sudo npm install -g gulp bower
* $ npm install
* $ bower install
* $ gulp watch (to watch and build our application)
* $ ./manage.py runserver

Project dir structure
-
* myprojectdir
* myprojectdir/env
* myprojectdir/myproject

What our gulp watch does
-
> **'gulp watch'** will create 3 files: 'application.js' which includes our application, 'application.packages.min.js' which includes all of our packages and 'application.min.css' which includes all of our styles. Our js-files is divided into two files because of the performance when developing, otherwise gulp will compile all of our packages and application files every time we'll make a change.

> To compile our production js-file (which includes both our packages and application) enter **'gulp build-js-production'**

Front-end directories
-
* **Angular files:** /assets/js/angular/
* **Angular templates:** /assets/ng-templates/
* **Javascript externals files:** /assets/js/external
* **Less files:** /assets/less/

Output files (in browser)
====================================
* **CSS:** /static/css/application.min.css
* **JS:** /static/js/application.production.min.js
* **JS:** /static/js/application.packages.min.js
* **JS:** /static/js/application.js
