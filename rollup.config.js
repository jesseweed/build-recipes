// LIBRARY
// import { default as rollup } from './rollup/vue.js'; // VUE
// import { react as rollup } from './rollup/react.js'; // REACT
import { default as rollup } from './rollup/preact.js'; // REACT
// import { riot as rollup } from './rollup/riot.js'; // RIOT

// OVERRIDE SETTINGS
rollup.dest       = '_dist/app.min.js'; // GENERIC EXPORT FILE
// rollup.sourceMap  = false; // DISABLE SOURCE MAPS

export default rollup;
