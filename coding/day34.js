const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["walk dog", "workout","cat"]}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
//Use Default Props
  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component{props.items}</h1>
      </div>
    )
  };
  // Change code below this line
  ShoppingCart.defaultProps = {
    items: 0
  };
//Override Default Props
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10}/>
      { /* Change code above this line */ }
    }
  };