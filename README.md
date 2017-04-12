# JS Build Recipes
##### Configuring the build system for JS projects is a pain in the ass!

This is a simple collection of config & build system recipes for bootstrapping (bare-bones versions) of popular frameworks.

It currently only supports rollup, webpack & a small handful of libraries, but will be adding more over time (feel free to submit pull-requests for additional libraries or build systems).

## Purpose
The primary purpose is to make bootstrapping a new project much faster & easier with a baseline config to start with.

The secondary purpose is to compare various libraries and build tools based on a few criteria:

1. How simple is it to setup and configure? Can it be done in a few lines of code? Hundreds? How many config files are reasonably required.
2. What's is the output files size?
3. What is the average build time.
4. What is the average page load time.

To do this, each framework has a very basic "hello world" style app with lives in the **/client** folder, and outputs "hello" and the name of the framework in an `<h1>` tag. This lets us compare apps against what is quite literally the simplest page possible.

Where supported, each app will use an html template file (or equivalent) for the content it will output.

None of the apps are utilizing any imports beyond what is required by the library (for example, there are no utility functions such as lodash being imported).

## Try it out

### Build all files
Run `yarn build` to build all frameworks with both Rollup and wWbpack. All files will be output to `/_dist`.

### Rollup
To test things out locally, simply uncomment the line for the framework you want to use in **rollup.config.js**, and run `yarn run-rollup` to run a build & start the server (this will create the file **_dist/app.min.js** which is loaded by **server/views/index.pug**). Point your browser to [http://localhost:3000](http://localhost:3000).

If instead of starting a server, you just want to build all libraries and exit, simply run `yarn rollup-all`.

### Webpack
To test things out locally, simply uncomment the line for the framework you want to use in **webpack.config.js**, and run `yarn run-wp` to run a build & start the server (this will create the file **_dist/app.min.js** which is loaded by **server/views/index.pug**). Point your browser to [http://localhost:3000](http://localhost:3000).

If instead of starting a server, you just want to build all libraries and exit, simply run `yarn rollup-all`.

----------

## Compare

**Note:** If you want to compare output size of all frameworks, you can simply run: `$ yarn build`

This will build all libraries and output them to `_dist`.

### Rollup
*Shared config lines:* 57

<table>

  <!-- HEADER -->
  <thead>
    <td><strong>Framework</strong></td>
    <td><strong>Build Size</strong></td>
    <td><strong>Config lines</strong></td>
    <td><strong>Client Files</strong></td>
    <td><strong>Config File</strong></td>
    <td><strong>Build time</strong></td>
  </thead>

  <!-- MARKO -->
  <tr>
    <td><a href='http://markojs.com/'>Marko</a></td>
    <td>17 KB</td>
    <td>35</td>
    <td>client/marko</td>
    <td>rollup/marko</td>
    <td>1.86s</td>
  </tr>

  <!-- PREACT -->
  <tr>
    <td><a href='http://preactjs.com'>Preact</a>&#42;</td>
    <td>36 KB</td>
    <td>30</td>
    <td>client/preact</td>
    <td>rollup/preact</td>
    <td>1.27s</td>
  </tr>

  <!-- REACT -->
  <tr>
    <td><a href='http://facebook.github.io/react/'>React</a></td>
    <td>193 KB</td>
    <td>35</td>
    <td>client/react</td>
    <td>rollup/react</td>
    <td>6.94s</td>
  </tr>

  <!-- RIOT -->
  <tr>
    <td><a href='http://riotjs.com'>Riot</a></td>
    <td>25 KB</td>
    <td>24</td>
    <td>client/riot</td>
    <td>rollup/riot</td>
    <td>2.43s</td>
  </tr>

  <!-- SVELTE -->
  <tr>
    <td><a href='https://svelte.technology/'>Svelte</a></td>
    <td>2 KB</td>
    <td>25</td>
    <td>client/svelte</td>
    <td>rollup/svelte</td>
    <td>1.43s</td>
  </tr>

  <!-- VANILLA -->
  <tr>
    <td><a href='http://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources'>Vanilla JavaScript</a> (ES2015)</td>
    <td>201 B</td>
    <td>21</td>
    <td>client/vanilla</td>
    <td>rollup/vanilla</td>
    <td>1.18s</td>
  </tr>

  <!-- VUE -->
  <tr>
    <td><a href='http://vuejs.org'>Vue</a></td>
    <td>91 KB</td>
    <td>21</td>
    <td>client/vue</td>
    <td>rollup/vue</td>
    <td>3.64s</td>
  </tr>

</table>

_*Non-minified size. Currently breaks on uglify._

### Webpack
*Shared config lines:* 60

<table>

  <!-- HEADER -->
  <thead>
    <td><strong>Framework</strong></td>
    <td><strong>Build Size</strong></td>
    <td><strong>Config lines</strong></td>
    <td><strong>Client Files</strong></td>
    <td><strong>Config File</strong></td>
    <td><strong>Build time</strong></td>
  </thead>

  <!-- MARKO -->
  <tr>
    <td><a href='http://markojs.com/'>Marko</a></td>
    <td>17 KB</td>
    <td>17</td>
    <td>client/marko</td>
    <td>webpack/marko</td>
    <td>2.03s</td>
  </tr>

  <!-- PREACT -->
  <tr>
    <td><a href='http://preactjs.com'>Preact</a></td>
    <td>11 KB</td>
    <td>24</td>
    <td>client/preact</td>
    <td>webpack/preact</td>
    <td>1.51s</td>
  </tr>

  <!-- REACT -->
  <tr>
    <td><a href='http://facebook.github.io/react/'>React</a></td>
    <td>219 KB</td>
    <td>24</td>
    <td>client/react</td>
    <td>webpack/react</td>
    <td>5.13s</td>
  </tr>

  <!-- RIOT -->
  <tr>
    <td><a href='http://riotjs.com'>Riot</a></td>
    <td>25 KB</td>
    <td>21</td>
    <td>client/riot</td>
    <td>webpack/riot</td>
    <td>1.73s</td>
  </tr>

  <!-- SVELTE -->
  <tr>
    <td><a href='https://svelte.technology/'>Svelte</a></td>
    <td>4 KB</td>
    <td>17</td>
    <td>client/svelte</td>
    <td>webpack/svelte</td>
    <td>1.24s</td>
  </tr>

  <!-- VANILLA -->
  <tr>
    <td><a href='http://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources'>Vanilla JavaScript</a> (ES2015)</td>
    <td>687 B</td>
    <td>11</td>
    <td>client/vanilla</td>
    <td>webpack/vanilla</td>
    <td>1.10s</td>
  </tr>

  <!-- VUE -->
  <tr>
    <td><a href='http://vuejs.org'>Vue</a></td>
    <td>92 KB</td>
    <td>11</td>
    <td>client/vue</td>
    <td>webpack/vue</td>
    <td>3.32s</td>
  </tr>

</table>

## Common
Libraries all share an additional "common" rollup or webpack file, and provides the following:
- ES Lint
- Babel
- Resolve helper for commonjs & es2015 styles modules
- Uglify
- Provides NODE_ENV to files
- In addition to plugins, it sets a few defaults:
  - Export format as IIFE
  - Export file as **_dist/app.min.js**
  - Default module name
  - Enables source maps
