const App = {
  data() {
    return {
      name: 'Quentin Haerinck',
      count: 1,
      containerClasses: 'red',
      newTodo: '',
      todoList:[],
    };
  },

  mounted() {
    setInterval( () => {
      /*console.log(this);
      this.count++;
      if(this.containerClasses ==='red'){
        this.containerClasses = 'blue';
      }else{
        this.containerClasses = 'red'
      }*/
    }, 1000)
  },

  methods: {
    addOne() {
      this.count++;
    },
    addTodo(){
      this.todoList.push(this.newTodo);
      console.log(this.todoList);
    },
  },
};

Vue.createApp(App).mount('#app');