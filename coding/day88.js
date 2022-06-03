//React-redux

let action={
    type: 'LOGIN'
  }

  const action = {
    type: 'LOGIN'
  }
  // Define an action creator here
  let actionCreator = () =>{
    return action
  }
  
  const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction());

  const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
  if (action.type === "LOGIN") {
      return {
        login: true
      };
    } else {
      return state;
    }
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };