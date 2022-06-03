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