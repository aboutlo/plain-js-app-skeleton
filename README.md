# README

Find a proper way to create a plain javascript project using modern tool hasn't been so easy. 
So I created this boilerplate project with the aim of provide a basic template with:
 
- directory layout
- a couple of classes
- a testing env properly configured with mocha, chai, and sinonjs running on phantomjs as well your browser

# requirements

System

- homebrew *Package Manager. Allows to install, remove and updated applications and packages.* <http://brew.sh>
- phantomjs *a headless WebKit scriptable with a JavaScript API.* 

App

- npm *Node Packaged Modules* <https://www.npmjs.org/>
- bower *A package manager for the web* <http://bower.io>
- gulp *The streaming build system* <http://gulpjs.com>

# getting started

Just clone the repo where ever you need. 

```
git clone git@github.com:aboutlo/plain-js-app-skeleton.git
```

Then you have to get all the dependencies via npm

```
$ cd plain-js-app-skeleton
$ npm install
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



