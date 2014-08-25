# README

Find a proper way to create a plain javascript project using modern tool hasn't been so easy. 
So I created this boilerplate project with the aim of provide a basic template with:
 
- directory layout
- a couple of classes
- a testing env properly configured with mocha, chai, and sinonjs running on phantomjs as well your browser

# requirements

System

- Homebrew *Package Manager. Allows to install, remove and updated applications and packages.* <http://brew.sh>
- Phantomjs *a headless WebKit scriptable with a JavaScript API.* 

App

- NPM *Node Packaged Modules* <https://www.npmjs.org/>
- Bower *A package manager for the web* <http://bower.io>
- Gulp *The streaming build system* <http://gulpjs.com>

Test

- Mocha *javaScript test framework running on node.js and the browser* <http://visionmedia.github.io/mocha/>
- Chai  *a BDD / TDD assertion library* <http://chaijs.com/>
- Sinon *standalone test spies, stubs and mocks for JavaScript* <http://http://sinonjs.org/>
- Sinon-chai *custom assertions for using Sinon with the Chai assertion library* <https://github.com/domenic/sinon-chai>

# getting started

Just clone this repo where ever you need. 

```
git clone git@github.com:aboutlo/plain-js-app-skeleton.git YOUR_APPLICATION_NAME
```

Then you have to get all the dependencies via npm

```
$ cd plain-js-app-skeleton
$ npm install

```

Replace all plain-js-app-skeleton with YOUR_APPLICATION_NAME

```
$ sed -i '' 's/plain-js-app-skeleton/your_application_name/g' *.json
$ sed -i '' 's/plain-js-app-skeleton/your_application_name/g' test/bower.json 
```

Then you can require all test js dependencies. Notice: There isn't js lib required to the project. 

```
$ cd test
$ bower install 
```


So now you are ready to run the app. 
 
```
$ gulp serve
```

Before running the test you have to install JS dependencies via bower

```
$ cd test
$ bower install
```

Now you can run tests via command line using mocha and phantomjs:

```
$ gulp test
```

or directly on your browser

```
$ open spec/index.html
```

notice: I'm using mocha with chai.js. You can use assert, expect and should style out of the box. 

To build the application just execute

```
$ gulp build
```

A dist directory with all minified objects will be created. Deploy it where ever you need.

# How to add classes or tests

It's pretty simple. Just add the classes in *app/scripts* (one for file) and tests in *test/spec*
Then you have to add them to *app/index.html* and test/index.html. Pay attention, order them with the proper priority.
  
ex. test/index/html

```
  <!-- include source files here... -->
  <script src="../app/scripts/namepace.js"></script>
  <script src="../app/scripts/utils.js"></script>
  <script src="../app/scripts/my_app.js"></script>

  <!-- include spec files here... -->
  <script src="spec/my_app_spec.js"></script>
```

We added *sinonjs* and *sinon-chai* to spy, stup and mock your classes using mocha and expect style. 



