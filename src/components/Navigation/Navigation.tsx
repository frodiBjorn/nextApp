"use client";
import Link from "next/link";
import { Button } from 'antd';
import { ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import styles from "./Navigation.module.scss";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const url = usePathname();
  const getActiveLink = (path: string) => {
    return url === path ? styles.active : '';
  };
  return (
    <div className={styles.wrapper}>
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
      <div className={styles.services}>
        <Link href={"/cart"} className={getActiveLink("/cart")}>
          <ShoppingCartOutlined  key='cart' />
        </Link>
  
        <Button className={styles.login} type='primary'>
          <LoginOutlined  />
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
