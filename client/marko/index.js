var helloComponent = require('./sample-app.marko');

helloComponent
  .renderSync({ name:'Marko' })
  .appendTo(document.querySelector('sample-app'));
