# JS Build Recipes
##### Configuring the build system for JS projects is a pain in the ass!

This is a simple collection of config & build system recipes for bootstrapping (bare-bones versions) of popular frameworks.

It currently only supports rollup& a small handful of libraries, but will be adding more over time (feel free to submit pull-requests for additional libraries or build systems).

#### Try it out
To test things out locally, simply uncomment the line for the framework you want to use in **rollup.config.js**, and run `yarn knit` to run a build & start the server (this will create the file **_dist/app.min.js** which is loaded by **server/views/index.pug**). Point your browser to [http://localhost:3000](http://localhost:3000).

#### Compare
If you want to compare output size of each framework, you can run `yarn compare`, this will build all libraries and output them to `examples/library-name.min.js`.

If you want just to build individual library you can so so as follows:

- `yarn build-react`
- `yarn build-riot`
- `yarn build-vue`


## React
**files:** client/react
**config:** rollup/react.js

## Riot
**files:** client/riot
**config:** rollup/riot

## Vue
**files:** client/vue
**config:** rollup/vue.js



*WIP*
