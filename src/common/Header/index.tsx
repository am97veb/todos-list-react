import HeaderProps from "./types";

const Header = ({ title }: HeaderProps) => (
  <header>
    <h1>{title}</h1>
  </header>
);

export default Header;