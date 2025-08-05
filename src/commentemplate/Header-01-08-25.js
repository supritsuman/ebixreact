import React, { useState, useEffect, useRef } from "react";
import Logo from "./logo";

const Header = () => {
  const [region, setRegion] = useState("Ebix India");
  const navRef = useRef();

  const handleRegionChange = (label) => {
    setRegion(label);
  };

  // Close all submenus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        const checkboxes = document.querySelectorAll(".dropdown-toggle-check");
        checkboxes.forEach((cb) => (cb.checked = false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menus = [
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
  ];

  return (
    <>
      <div className="topnav">
        <div className="container-fluid px-4">
          <a href="#">Careers</a>
          <a href="#">Contact us</a>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-light px-4 navnew fixed-top"
        ref={navRef}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Logo />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="mainNavbar"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {menus.map((menu, idx) => {
                const menuId = `menu-toggle-${idx}`;
                return (
                  <li className="nav-item dropdown" key={idx}>
                    <input
                      type="checkbox"
                      id={menuId}
                      className="dropdown-toggle-check"
                      onChange={(e) => {
                        const allCheckboxes = document.querySelectorAll(
                          ".dropdown-toggle-check"
                        );
                        allCheckboxes.forEach((cb, cbIdx) => {
                          cb.checked = idx === cbIdx && e.target.checked;
                        });
                      }}
                    />
                    <label
                      htmlFor={menuId}
                      className="nav-link nav-link-label dropdown-toggle"
                    >
                      {menu.label}
                    </label>
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
                );
              })}
            </ul>
          </div>

          <div className="d-flex align-items-center nav-icons position-relative">
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

            <a href="#" className="ms-2">
              <i className="bi bi-globe2 coloriconb"></i>
            </a>

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
