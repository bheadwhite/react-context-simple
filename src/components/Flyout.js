import { EuiFlyout } from '@elastic/eui';

export function Flyout({ isOpen, ...props }) {
  if (isOpen) {
    return <EuiFlyout {...props} />;
  } else {
    return null;
  }
}
