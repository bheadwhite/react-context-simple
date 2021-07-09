import { Button } from '../components/Button';
import { userActions, useUserContext } from '../context/userContext';

export function PasswordComponent() {
  const { userState, setUserState } = useUserContext();

  function resetPassword() {
    setUserState({ type: userActions.SET_PASSWORD, payload: '' });
  }

  return (
    <div>
      {userState.password}
      <Button onClick={resetPassword}>reset</Button>
    </div>
  );
}
