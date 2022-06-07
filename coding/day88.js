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
//Use a Switch Statement to Handle Multiple Actions

  const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
  switch (action.type) {
      case "LOGIN":
        return {
          authenticated: true
        };
  
      case "LOGOUT":
        return {
          authenticated: false
        };
  
      default:
        return defaultState;
    }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };
//Use const for Action Types


  const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN': 
      return {
        authenticated: true
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};