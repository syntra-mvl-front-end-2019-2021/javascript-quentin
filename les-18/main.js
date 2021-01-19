const App = {
  data() {
    return {
      lineOne: null,
      lineTwo:null,
      symbol: '',
      results: [],
    };
  },

  methods: {
    addNumber(number){
      if(this.lineTwo === null){
        this.lineTwo = number;
        return;
      }
      this.lineTwo = parseInt( '' + this.lineTwo + number);
    },
    sum(){
      let result = this.lineOne + this.lineTwo; 
      this.results.push(result);
      return result;
    },
    minus(){
      let result = this.lineOne - this.lineTwo;
      this.results.push(result);
      return result;
    },
    divide(){
      let result = this.lineOne / this.lineTwo;
      this.results.push(result);
      return result;
    },
    product(){
      let result = this.lineOne * this.lineTwo;
      this.results.push(result);
      return result;
    },
    root(){
      let result = Math.sqrt( this.lineTwo );
      this.results.push(result);
      return result;
    },
    power(){
      let result = Math.pow(this.lineOne, this.lineTwo);
      this.results.push(result);
      return result;
    },
    clear(){
      this.lineOne = null;
      this.lineTwo = null;
      this.symbol = '';
      return;
    },
    calculate(){
      if(
        this.lineOne === null ||
        this.lineTwo === null || 
        this.symbol === ''
        ){
        return;
      }
      switch (this.symbol){
        case '+' : this.lineTwo = this.sum();
        break;
        case '-' : this.lineTwo = this.minus();
        break;
        case '/' : this.lineTwo = this.divide();
        break;
        case '*' : this.lineTwo = this.product();
        break;
        case '√' : this.lineTwo = this.root();
        break;
        case 'xn' : this.lineTwo = this.power();
        break;
      }
      this.lineOne = null;
      this.symbol = '';
    },
    selectSymbol(symbol){
      console.log(this.symbol);
      this.calculate();
      this.lineOne = this.lineTwo;
      this.symbol = symbol;
      this.lineTwo = null;
    },
  },
};

Vue.createApp(App).mount('#vue-app');

/**
 * [ ] styling
 * [ ] product
 * [ ] minus
 * [ ] divide
 * [ ] root
 * [ ] power
 * [ ] backspace
 * [ ] clear
 * [ ] history
 ** [ ] make line two input field
 */