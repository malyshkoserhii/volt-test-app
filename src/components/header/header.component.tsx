import { Select } from '../select/select.component';
import { header, logo } from './header.styles';

export const Header = () => {
  return (
    <header className={header}>
      <p className={logo}>My simple Todo app</p>
      <Select />
    </header>
  );
};
