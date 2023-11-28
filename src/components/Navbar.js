"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="/">
        <img
          className="page-logo"
          src="./images/empowerabilitylabslogo.png"
          alt="Empower Ability Labs Logo"
        />
      </a>
      <nav>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <Link href="/" legacyBehavior>
                <a title="Home Page" className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li
              className={`nav-item ${pathname === "/services" ? "active" : ""}`}
            >
              <Link href="/services" legacyBehavior>
                <a title="Services Page" className="nav-link">
                  Services
                </a>
              </Link>
            </li>
            <li
              className={`nav-item ${
                pathname === "/schedule-call" ? "active" : ""
              }`}
            >
              <Link href="/schedule-call" legacyBehavior>
                <a title="Schedule a Call Page" className="nav-link">
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
