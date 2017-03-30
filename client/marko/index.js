var helloComponent = require('./sample-app')
 
helloComponent
  .renderSync({ name:'Marko' })
  .appendTo(document.querySelector('sample-app'))