# JS Build Recipes
##### Configuring the build system for JS projects is a pain in the ass!

This is a simple collection of config & build system recipes for bootstrapping (bare-bones versions) of popular frameworks.

It currently only supports rollup & a small handful of libraries, but will be adding more over time (feel free to submit pull-requests for additional libraries or build systems).

## Try it out
To test things out locally, simply uncomment the line for the framework you want to use in **rollup.config.js**, and run `yarn knit` to run a build & start the server (this will create the file **_dist/app.min.js** which is loaded by **server/views/index.pug**). Point your browser to [http://localhost:3000](http://localhost:3000).



## Compare

<table>
  <thead>
    <td><strong>Framework</strong></td>
    <td><strong>Size</strong></td>
    <td><strong>Config lines</strong></td>
    <td><strong>Client Files</strong></td>
    <td><strong>Config File</strong></td>
    <td><strong>Build command</strong></td>
  </thead>
  <tr>
    <td><a href='preactjs.com'>Preact</a>\*</td>
    <td>34 KB</td>
    <td>34</td>
    <td>client/preact</td>
    <td>rollup/preact</td>
    <td><code>yarn build-preact</code></td>
  </tr>
  <tr>
    <td><a href='facebook.github.io/react/'>React</a></td>
    <td>196 KB</td>
    <td>29</td>
    <td>client/react</td>
    <td>rollup/react</td>
    <td><code>yarn build-react</code></td>
  </tr>
  <tr>
    <td><a href='riotjs.com'>Riot</a></td>
    <td>35 KB</td>
    <td>36</td>
    <td>client/riot</td>
    <td>rollup/riot</td>
    <td><code>yarn build-riot</code></td>
  </tr>
  <tr>
    <td><a href='vuejs.org'>Vue</a></td>
    <td>91 KB</td>
    <td>22</td>
    <td>client/vue</td>
    <td>rollup/vue</td>
    <td><code>yarn build-vue</code></td>
  </tr>
</table>

_*Non-minified size. Currently breaks on uglify._


If you want to compare output size of all frameworks, you can simple run:

`$ yarn compare`


this will build all libraries and output them to **examples/library-name.min.js**.

## Common
Libraries all share an additional "common" react file which is currently 55 lines long, and provides the following:
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
