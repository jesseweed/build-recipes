let app,
    Vue = require('vue/dist/vue.js');

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

app = new Vue({
  el: '#app'
});

console.log('VUE', app);
