const App = {

};

const vueApp = Vue.createApp(App);

vueApp.component('counter', {
  props: ['startVal'],
  template: `<p>{{counter}}</p>
  <button type="button" @click="incrementCounter"> +1</button>`,
  data() {
    return {
      counter : this.startVal,
    }
  },
  methods: {
    incrementCounter(){
      this.counter ++;
    }
  },
});

vueApp.mount('#vue-app');
