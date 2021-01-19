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
    sum() {
      return this.lineOne + this.lineTwo;
    },
    product() {
      return this.lineOne * this.lineTwo;
    },
    minus() {
      return this.lineOne - this.lineTwo;
    },
    divide() {
      return this.lineOne / this.lineTwo;
    },
    root() {
      return Math.pow(this.lineOne, 1 / this.lineTwo);
    },
    power() {
      return Math.pow(this.lineOne, this.lineTwo);
    },
    clear(){
      this.lineOne = null;
      this.lineTwo = null;
      this.symbol = '';
    },
    calculate(){
      if(
        this.lineOne === null ||
        this.lineTwo === null || 
        this.symbol === ''
        ){
        return;
      }
      switch (this.symbol) {
        case '+':
          result = this.sum();
          break;
        case '*':
          result = this.product();
          break;
        case '-':
          result = this.minus();
          break;
        case '/':
          result = this.divide();
          break;
        case '√':
          result = this.root();
          break;
        case '^':
          result = this.power();
          break;
        case '=':
        case 'Enter':
          this.calculate();
          break;
        case 'c':
          this.clear();
          break;
      }

      parseFloat(result.toFixed(2));

      this.addHistoryItem(result);
      this.lineTwo = result;
      this.lineOne = null;
      this.symbol = '';
    },
    addHistoryItem(result) {
      this.results.push(
        `${this.lineOne} ${this.symbol} ${this.lineTwo} = ${result}`
      );
    },
    selectSymbol(symbol){

      console.log(this.symbol);
      this.calculate();

      this.lineOne = this.lineTwo;
      this.symbol = symbol;
      this.lineTwo = null;
    },
    backspace(){

      if (this.lineTwo === null || this.lineTwo.length === 0){
        return;
      }

      let subStr = this.lineTwo.toString().slice(0,-1);
      if(subStr.length === 0){
        this.lineTwo = null;
        return;
      }

      this.lineTwo = parseFloat(subStr);
    },
    keyDown(event){
      switch (event.key) {
        case '*':
          this.selectSymbol('*');
          break;
        case '/':
          this.selectSymbol('/');
          break;
        case '-':
          this.selectSymbol('-');
          break;
        case '+':
          event.preventDefault();
          this.selectSymbol('-');
          break;
      }
    }
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