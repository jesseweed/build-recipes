const path = require('path');

// let wp = require('./webpack/marko');
// let wp = require('./webpack/preact');
// let wp = require('./webpack/react');
// let wp = require('./webpack/riot');
// let wp = require('./webpack/svelte');
let wp = require('./webpack/vanilla');
// let wp = require('./webpack/vue');

wp.output.filename = 'app.min.js'; // GENERIC EXPORT FILE

module.exports = wp;
