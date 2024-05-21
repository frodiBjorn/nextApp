import Link from "next/link";
import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";

import Image from 'next/image';

interface Props {
  className: string;
}
const Header = ({className}: Props) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <Link href={"/"} >
        <Image src={`/logo.svg`} alt='Logo' width={200} height={50}/>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
