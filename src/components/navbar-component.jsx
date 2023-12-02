"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar-component.module.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbarContainer}>
      <a href="/">
        <img
          className="page-logo"
          src="./images/empowerabilitylabslogo.png"
          alt="Empower Ability Labs Logo"
        />
      </a>
      <nav>
        <div>
          <ul className={styles.aNavbarList}>
            <li className={`${pathname === "/" ? styles.activeItemLink : ""}`}>
              <Link href="/" legacyBehavior>
                <a className={styles.itemLink} title="Home Page">
                  Home
                </a>
              </Link>
            </li>
            <li
              className={`${
                pathname === "/services" ? styles.activeItemLink : ""
              }`}
            >
              <Link href="/services" legacyBehavior>
                <a className={styles.itemLink} title="Services Page">
                  Services
                </a>
              </Link>
            </li>
            <li
              className={`${
                pathname === "/schedule-call" ? styles.activeItemLink : ""
              }`}
            >
              <Link href="/schedule-call" legacyBehavior>
                <a className={styles.itemLink} title="Schedule a Call Page">
                  Schedule a Call
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
