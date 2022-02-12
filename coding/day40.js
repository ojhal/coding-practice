class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
     }
    toggleVisibility() {
      this.setState(state => ({
        visibility: !state.visibility
      }));
    }
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick = {this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick = {this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };