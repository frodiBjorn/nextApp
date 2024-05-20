"use client";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const url = usePathname();
  const getActiveLink = (path: string) => {
    return url === path ? styles.active : "";
  };
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        <li className={styles.navigation_item}>
          <Link href={"/"} className={getActiveLink("/")}>
            Home
          </Link>
        </li>
        <li className={styles.navigation_item}>
          <Link href={"/catalog"} className={getActiveLink("/catalog")}>
            Catalog
          </Link>
        </li>
        <li className={styles.navigation_item}>
          <Link href={"/contacts"} className={getActiveLink("/contacts")}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
