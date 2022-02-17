class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* Change code below this line */ }
  <GetInput 
    input={this.state.inputValue}
    handleChange={this.handleChange}/>
  <RenderInput 
  input={this.state.inputValue}
  />
          { /* Change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };
//Use the Lifecycle Method componentWillMount
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
  console.log('Component being mounted')
      // Change code above this line
    }
    render() {
      return (
        <div><h1>"ojhal"</h1></div>
        )
    }
  };


//Use the Lifecycle Method componentDidMount
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 3500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: { this.state.activeUsers }</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }