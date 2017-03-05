let Vue = require('vue/dist/vue.js');

window.addEventListener('load', function () {

  Vue.component('sample-app', {
    template: `
      <h1>
        Hello, I'm {{message}}.
      </h1>
    `,
    data: () => {
      return {
        message: 'Vue'
      };
    }
  });

  let app = new Vue({
    el: '#app'
  });

  console.log('VUE', app);

});
