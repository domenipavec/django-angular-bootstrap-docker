django-angular-bootstrap-boilerplate
====================================

What's included?
-
* Django 1.6.8
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

Getting started
-
* Copy or clone this repository
* In your terminal open your cloned directory
* virtualenv env-myprojectname --dist
* source eenv-myprojectname/bin/activate
* pip install -r requirements.txt
* sudo gem install compass
* sudo gem install boostrap-sass
* sudo npm install
* bower install
* gulp watch (to watch and build our application)

> **'gulp watch'** will create 3 files: 'application.min.js' which includes our application, 'application.packages.min.js' which includes all of our packages and 'application.min.css' which includes all of our styles. Our js-files is divided into two files because of the performance when developing, otherwise gulp will compile all of our packages and application files every time we'll make a change.

> To compile our production js-file (which includes both our packages and application) enter **'gulp build-js-production'**

Front-end directories
-
* **Angular files:** /assets/js/angular/
* **Angular templates:** /assets/ng-templates/
* **Javascript externals files:** /assets/js/external
* **Sass files:** /assets/sass/

Output files (in browser)
====================================
* **CSS:** /static/css/application.min.css
* **JS:** /static/js/application.production.min.js
* **JS:** /static/js/application.packages.min.js
* **JS:** /static/js/application.min.js
