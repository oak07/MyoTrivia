# MyoTrivia

Description
-----------

A trivia game using the Myo armband for patients recovering from a stroke. Project for UW CSE 510.

Set Up
------
Run the following from the root directory:

`npm install`
  
to install project dependencies into a folder called `node_modules`

In one window, run

`npm run-script make`

This will put all the js files into main.js and css files into main.css and watch for changes to css/jsx files only. Any other changes will require running make again.

In another window, run

`npm run-script serve`

to launch the server.

Directory Breakdown
-------------------

There are three directories in the source:

1. `src/server` - This contains all code only pertaining to the server side application. If there is no server, you can safely delete this directory and remove `express` as a dependency.
2. `src/client` - This contains all code only pertaining to the client side application. Browserify is used with the start point `client/main.ts` to scoop up all client code and bundle it into `client/static/js/main.js`
3. `src/common` - This contains all code that is shared by both client and server. NodeJS processes dependencies on its own via support for `require()`, so any `src/server` code that depends on common code will do so automatically. `src/client` code will scoop up common code via the same mechanism, but employed by Browserify.
4. `src/vendor` - This contains all JS source that is not available via NPM.

Vendors
-------

Vendor files are files that do not naturally belong to the application, but need to be used (e.g. libraries). If a library has an equivalent NPM package, you can just use `require()` as normal after installation via NPM and both the client and server will have support to get the dependency (the client via Browserify).

If the library is client and does not have a NPM package, you will need to place it in `src/vendor`.

GitIgnore
---------

The project is initially setup to ignore common ide files, and built JavaScript / map files. JavaScript files in the `src/common/vendor` directory are not ignored.

----------

The boilerplate was adapted from https://github.com/aaronnech/tsbp
