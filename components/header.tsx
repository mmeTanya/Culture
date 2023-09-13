import MobileNav from "./mobile-nav";
import s from "../styles/header.module.scss";

const Header = () => {

  return (
    <header className={s.page_header}>
      <MobileNav />
    </header>
  );
};

export default Header;
