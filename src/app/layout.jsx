"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

import Navbar from "../components/navbar-component";

import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
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
          crossOrigin="anonymous"
        />
        <title>
          {pathname === "/"
            ? "Empower Ability Labs"
            : pathname === "/services"
            ? "Services"
            : "Schedule a Call"}
        </title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="container">
          <p>© Copyright Accessible Knowledge Base 2023</p>
        </footer>
      </body>
    </html>
  );
}
