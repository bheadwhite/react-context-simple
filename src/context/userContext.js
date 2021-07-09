import { useReducer, createContext, useContext } from 'react';

export const userActions = {
  SET_USERNAME: 'SET_USERNAME',
  SET_PASSWORD: 'SET_PASSWORD',
  TOGGLE_LOGGED_IN: 'TOGGLE_LOGGED_IN',
};

const initState = {
  username: '',
  password: '',
  isLoggedIn: false,
};

const userContext = createContext(initState);
const userReducer = (state, action) => {
  switch (action.type) {
    case userActions.SET_USERNAME:
      return { ...state, username: action.payload };
    case userActions.SET_PASSWORD:
      return { ...state, password: action.payload };
    case userActions.TOGGLE_LOGGED_IN:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};

// this returns you the provider wrapper, which will give "CONTEXT" to all the children components inside
export const Provider = ({ children }) => {
  const [userState, setUserState] = useReducer(userReducer, initState);
  const providerValue = { userState, setUserState };
  return (
    <userContext.Provider value={providerValue}>
      {children}
    </userContext.Provider>
  );
};

// this hook will tap into that context and return you the specific "value" of your provider
export function useUserContext() {
  const context = useContext(userContext);
  return context;
}
