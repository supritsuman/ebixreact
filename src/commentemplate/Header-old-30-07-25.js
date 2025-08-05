import React, { useState } from "react";
import Logo from "./logo";

const Header = () => {
  const [region, setRegion] = useState("Ebix India");

  const handleRegionChange = (label) => {
    setRegion(label);
  };

  return (
    <>
      <div className="topnav">
        <div className="container-fluid px-4">
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light px-4 navnew">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <Logo />
          </a>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Centered Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="mainNavbar"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                {
                  label: "About us",
                  items: [
                    "Overview",
                    "Mission & Vision",
                    "Values",
                    "What We Do",
                    "How We Work",
                    "Leadership",
                    "Brand Kit",
                  ],
                },
                {
                  label: "Industries",
                  items: ["Insurance", "Healthcare", "Finance"],
                },
                {
                  label: "Our Brands",
                  items: ["Brand A", "Brand B"],
                },
                {
                  label: "Investors",
                  items: ["Reports", "Stock Info"],
                },
                {
                  label: "Quick links",
                  items: [
                    "Trust Centre",
                    "Find a solution",
                    "Industries",
                    "Find a partner",
                    "Trials & demos",
                    "Find services",
                  ],
                },
              ].map((menu, idx) => (
                <li className="nav-item dropdown" key={idx}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {menu.label}
                  </a>
                  {/* Add unique class to <ul> */}
                  <ul className={`dropdown-menu submenu-${idx}`}>
                    {menu.items.map((item, subIdx) => (
                      <li key={subIdx}>
                        <a className="dropdown-item" href="#">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center nav-icons position-relative">
            {/* Search Toggle */}
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#searchBox"
              aria-expanded="false"
              aria-controls="searchBox"
            >
              <i className="bi bi-search"></i>
            </button>

            {/* Collapsible Search Box */}
            <div
              className="collapse position-absolute top-100 start-0 mt-2"
              id="searchBox"
              style={{ width: "200px" }}
            >
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search..."
              />
            </div>

            {/* Globe Icon */}
            <a href="#" className="ms-2">
              <i className="bi bi-globe2 coloriconb"></i>
            </a>

            {/* Language Dropdown */}
            <div className="dropdown ms-2">
              <a
                className="nav-link dropdown-toggle tgnew"
                href="#"
                data-bs-toggle="dropdown"
              >
                {region}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {["Ebix US", "Ebix Europe", "Ebix Asia"].map((item, idx) => (
                  <li key={idx}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRegionChange(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
