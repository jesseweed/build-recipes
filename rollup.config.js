// LIBRARY
// import { default as rollup } from './rollup/vue.js'; // VUE
// import { default as rollup } from './rollup/react.js'; // REACT
// import { default as rollup } from './rollup/preact.js'; // REACT
// import { default as  rollup } from './rollup/riot.js'; // RIOT
import { default as rollup } from './rollup/vanilla.js'; // REACT


// OVERRIDE SETTINGS
rollup.dest       = '_dist/app.min.js'; // GENERIC EXPORT FILE
// rollup.sourceMap  = false; // DISABLE SOURCE MAPS

export default rollup;
