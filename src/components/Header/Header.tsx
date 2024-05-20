import Link from "next/link";
import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";

interface Props {
  className: string;
}
const Header = ({className}: Props) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <p className={styles.logo}>LOGO</p>
      <Navigation />
    </header>
  );
};

export default Header;
