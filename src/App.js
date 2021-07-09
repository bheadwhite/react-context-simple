import { Button } from './components/Button';
import { TextInput } from './components/TextInput';
import { Flyout } from './components/Flyout';
import { makeStyles } from '@material-ui/core';
import { userActions, useUserContext } from './context/userContext';
import { UsernameComponent } from './components/Username';
import './App.css';

const useStyles = makeStyles(() => ({
  app: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',
  },
  wrapper: {
    width: '400px',
    height: '400px',
    display: 'grid',
    padding: '16px',
    borderRadius: '4px',
    placeItems: 'center',
    placeContent: 'center stretch',
    gridGap: '12px',
  },
}));

function App() {
  const classes = useStyles();
  const { setUserState, userState } = useUserContext();

  function handleSetUser(e) {
    return setUserState({
      type: userActions.SET_USERNAME,
      payload: e.target.value,
    });
  }
  function handleSetPassword(e) {
    return setUserState({
      type: userActions.SET_PASSWORD,
      payload: e.target.value,
    });
  }
  function toggleLoggedIn() {
    return setUserState({ type: userActions.TOGGLE_LOGGED_IN });
  }

  return (
    <div className={classes.app}>
      <div className={classes.wrapper}>
        <h3>React Context</h3>
        <TextInput placeholder='username' onChange={handleSetUser} />
        <TextInput
          placeholder='password'
          type='password'
          onChange={handleSetPassword}
        />
        <Button onClick={toggleLoggedIn}>Submit</Button>
      </div>
      <UsernameComponent />
      <Flyout isOpen={userState.isLoggedIn}>
        <Button onClick={toggleLoggedIn}>Close</Button>
      </Flyout>
    </div>
  );
}

export default App;
