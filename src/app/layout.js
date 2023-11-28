import { Inter } from "next/font/google";
import Head from "next/head";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Foster understanding and promote inclusive digital experiences for all"
        />
        <meta name="author" content="" />
        <link
          href="https://getbootstrap.com/docs/4.0/examples/jumbotron/jumbotron.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">
            <img
              class="page-logo"
              src="/accessible_page/public/images/empowerabilitylabslogo.png"
              alt="Empower Ability Labs Logo"
            />
          </a>
          <nav>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a href="#" class="nav-link">
                    Home
                  </a>
                </li>
                <li class="nav-item active">
                  <a href="#" class="nav-link">
                    Services
                  </a>
                </li>
                <li class="nav-item active">
                  <a href="#" class="nav-link">
                    Schedule a Call
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <main>{children}</main>
        <footer class="container">
          <p>Copyright Accessible Knowledge Base 2023</p>
        </footer>
      </body>
    </html>
  );
}
