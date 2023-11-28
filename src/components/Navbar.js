"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="/">
        <img
          class="page-logo"
          src="./images/empowerabilitylabslogo.png"
          alt="Empower Ability Labs Logo"
        />
      </a>
      <nav>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <Link href="/" legacyBehavior>
                <a title="Home Page" className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li class={`nav-item ${pathname === "/services" ? "active" : ""}`}>
              <Link href="/services" legacyBehavior>
                <a title="Services Page" className="nav-link">
                  Services
                </a>
              </Link>
            </li>
            <li
              class={`nav-item ${
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
