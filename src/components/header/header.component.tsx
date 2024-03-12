import { header, logo } from './header.styles';

export const Header = () => {
  return (
    <header className={header}>
      <p className={logo}>My simple Todo app</p>
    </header>
  );
};
