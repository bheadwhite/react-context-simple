import { PasswordComponent } from './Password';
import { useUserContext } from '../context/userContext';

export function UsernameComponent() {
  const { userState } = useUserContext();
  return (
    <div>
      <div>{userState.username}</div>
      <PasswordComponent />
    </div>
  );
}
