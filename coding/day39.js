let obj ={
    score: 10
  }
  let msg = `your score is ${obj.score ?? 100}`//nullish coalescing oprator ??
  console.log(msg)
  
  //falsy value //nullish value
  //undefined.  //undefined
  //null.       //null

//Set State with this.setState
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
  this.setState({
    name: 'React Rocks!'
  });
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };


//Bind 'this' to a Class Method
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      // Change code below this line
  // this.handleClick = this.handleClick.bind(this)
      // Change code above this line
    }
    handleClick = () => {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <button onClick={this.handleClick}>Click Me</button>
          { /* Change code above this line */ }
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };