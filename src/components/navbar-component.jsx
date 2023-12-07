"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar-component.module.css";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbarContainer}>
      <Link href="/" legacyBehavior>
        <a title="Empower Ability Labs Logo">
          <img
            className="page-logo"
            src="./images/empowerabilitylabslogo.png"
            alt="Empower Ability Labs Logo"
          />
        </a>
      </Link>
      <nav aria-label="Empower Ability Labs">
        <div>
          <ul
            className={styles.aNavbarList}
            role="menubar"
            aria-label="Empower Ability Labs"
          >
            <li
              role="none"
              className={`${pathname === "/" ? styles.activeItemLink : ""}`}
            >
              <Link href="/" legacyBehavior>
                <a
                  role="menuitem"
                  className={styles.itemLink}
                  title="Home Page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li
              role="none"
              className={`${
                pathname === "/services" ? styles.activeItemLink : ""
              }`}
            >
              <Link href="/services" legacyBehavior>
                <a
                  role="menuitem"
                  className={styles.itemLink}
                  title="Services Page"
                >
                  Services
                </a>
              </Link>
            </li>
            <li
              role="none"
              className={`${
                pathname === "/schedule-call" ? styles.activeItemLink : ""
              }`}
            >
              <Link href="/schedule-call" legacyBehavior>
                <a
                  role="menuitem"
                  className={styles.itemLink}
                  title="Schedule a Call Page"
                >
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
