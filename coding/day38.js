class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
      this.state={
        name: "john"
      }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };

  //Render State in the User Interface
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };