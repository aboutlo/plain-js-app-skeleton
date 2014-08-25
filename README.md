# README

Find a proper way to create a plain javascript project using modern tool hasn't been so easy. 
So I created this boilerplate project with the aim of provide a basic a template with:
 
- directory layout
- a couple of classes
- a testing env properly configured

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

or the tests via command line:

```
$ gulp test
```

or directly on your browser

```
$ open spec/index.html
```

To build the application just execute

```
$ gulp build
```

A dist directory with all minified objects will be created. Deploy it where ever you need.

# How to add classes or tests

It's pretty simple. Just add the classes in *app/scripts* (one for file) and tests in *test/spec*

