import { EuiButton } from '@elastic/eui';

export function Button({ children, ...props }) {
  return <EuiButton {...props}>{children}</EuiButton>;
}
