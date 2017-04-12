// LIBRARY
// import { default as rollup } from './rollup/marko.js'; // MARKO
// import { default as rollup } from './rollup/react.js'; // REACT
// import { default as rollup } from './rollup/preact.js'; // PREACT
// import { default as  rollup } from './rollup/riot.js'; // RIOT
// import { default as rollup } from './rollup/svelte.js'; // SVELTE
import { default as rollup } from './rollup/vanilla.js'; // VANILLA
// import { default as rollup } from './rollup/vue.js'; // VUE

// OVERRIDE SETTINGS
rollup.dest       = '_dist/app.min.js'; // GENERIC EXPORT FILE
// rollup.sourceMap  = false; // DISABLE SOURCE MAPS

export default rollup;
