# 2016 React Redux Twitter App

> A simple React app which displays the Twitter timelines of the 2016 US presidential election candidates. The app was built using React, Redux, and Redux Saga. The project was built on top of a boilerplate template for Webpack 4 configured with React, Bootstrap 4 and ES6 Javascript.

## Developer notes

* During development, I noticed some irregularities with the payload of GET requests, which may be due to the quantity of them being flagged as 'disputed claims.'
* Bootstrap was chosen to match Twitter's styling more closely.
* Routes were set up for paths /HillaryClinton and /realDonaldTrump, however nothing is served directly from these paths.
  (i.e.: going to http://localhost:8080/HillaryClinton will result in a 404 error). Please make sure to load the page from the base URL.
* The Bearer Token is left in plain text for time/simplicity.
* My first time working with the Twitter API and I learned that it does not support CORS, so https://cors-anywhere.herokuapp.com was used to be able to make the necessary HTTP requests from the browser.
* I do not have much experience with Webpack, which is why I chose to go along with a boilerplate code, and added some additional configuration as needed (e.g.: to ensure compatibility with generators).
* I had never worked with Redux Saga before, so this is my first attempt at implementing the library. I have previous limited experience with using Redux Thunk to handle asynchronous requests within Redux.
* There are of course many more features I would have liked to implemented. For example:
    * Hyperlink all links shared by the user and use the link's display name instead of the actual URL
    * Display shared media (photos, videos, etc.)
    * Hyperlink mentioned users
    * Implement a continuous timeline feed
    * Format the retweet and favorite counts to match that of Twitter (e.g.: 7.2k instead of 7834)
    * Allow a user to authenticate and interact with the tweets displayed (e.g.: favorite or retweet)
    * and more!
    
## Getting started

1. Install dependencies

```
npm install
```

2. Start the project in development mode (the app was only tested in development mode in the interest of time).

```
npm run start
```

3. Build for production (not yet tested).

```
npm run build
```
---
####The following is taken directly from the boilerplate documentation:

An output is minified via --mode flag which is set to production (already minified, optimized bundle) - additionally **/dist** directory is removed each time you run this script to make sure there are no artifacts left in the output location

Optionally there is configured a task to export files with development mode (output is **not** minimized/optimized). To use it run

```
npm run dev
```

## What's already configured?

* **React** - create app components using Facebook's React Javascript UI library
* **Bootstrap 4** - popular framework for building responsive, mobile-first sites
* **Babel** - transpile javascript ES6 code down to ES5
* **Extract Text Plugin** - extract styles to separate files
* **SASS Loader** - utilize modern SASS preprocessor to create styles for your app and compile them to .css
* **Html Webpack Plugin** - allows use of predefined HTML template (entry file: **./src/index.html**)
* **File Loader** - allows use of media files in project via emitted URL
* **Image Webpack Loader** - compress source images in build with imagemin
* **Webpack Dev Server** - serves an app and opens a browser for development. Updates the browser on file changes.

## Project structure

* **/src** - here are all development files
* **/dist** - production output, imported libraries are bundled into separated vendor.[hash].js, while rest of components are in app.[hash].js (same for styles)

## Tools used to make life a little better

* **eslint** - Javascript linter - configuration in **eslintrc.json** file
* **jshint** - Javascript linter - configuration in **.jshintrc** file

## License

This project is licensed under MIT license.

