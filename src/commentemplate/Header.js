import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo";

const Header = () => {
  const [region, setRegion] = useState("Ebix India");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation();

  const handleRegionChange = (label) => {
    setRegion(label);
  };

  // Function to close all menus (with delay)
  const closeAllMenus = () => {
    setTimeout(() => {
      // Close all dropdown checkboxes
      const allCheckboxes = document.querySelectorAll(".dropdown-toggle-check");
      allCheckboxes.forEach((cb) => (cb.checked = false));

      // Close navbar collapse in mobile
      const navCollapse = document.getElementById("mainNavbar");
      if (navCollapse && navCollapse.classList.contains("show")) {
        const bsCollapse =
          window.bootstrap?.Collapse.getInstance(navCollapse) ||
          new window.bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    }, 150); // delay for smooth navigation before closing
  };

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

  useEffect(() => {
    const navCollapse = document.getElementById("mainNavbar");
    const handleShown = () => setIsNavbarOpen(true);
    const handleHidden = () => setIsNavbarOpen(false);

    if (navCollapse) {
      navCollapse.addEventListener("shown.bs.collapse", handleShown);
      navCollapse.addEventListener("hidden.bs.collapse", handleHidden);
    }

    return () => {
      if (navCollapse) {
        navCollapse.removeEventListener("shown.bs.collapse", handleShown);
        navCollapse.removeEventListener("hidden.bs.collapse", handleHidden);
      }
    };
  }, []);

  const menus = [
    {
      label: "About us",
      items: [
        { name: "Overview", path: "/about/overview" },
        { name: "Industry Expertise", path: "/about/overview#industry" },
        { name: "Our Reach", path: "/about/overview#reach" },
        { name: "Our Core Values", path: "/about/overview#ourcorevalues" },
        { name: "Our Mission", path: "/about/overview#ourmission" }
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

  const isActiveMenuLabel = (menu) => {
    if (menu.label === "About us") {
      return menu.items.some((item) => location.pathname === item.path);
    } else {
      return menu.items.some((item) => {
        const slug = `/${menu.label
          .toLowerCase()
          .replace(/ /g, "-")}/${item
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/&/g, "and")}`;
        return location.pathname === slug;
      });
    }
  };

  return (
    <>
      <div className="topnav">
        <div className="container-fluid px-4">
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-light px-4 navnew fixed-top"
        ref={navRef}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>

          <button
            className="navbar-toggler newnavbar"
            type="button"
            onClick={() => setIsNavbarOpen((prev) => !prev)}
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-expanded={isNavbarOpen}
          >
            {isNavbarOpen ? (
              <span className="menuclosex">&times;</span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="mainNavbar"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {menus.map((menu, idx) => {
                const menuId = `menu-toggle-${idx}`;
                const isIndustries = menu.label === "Industries";
                const isActive = isActiveMenuLabel(menu);

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
                      className={`nav-link nav-link-label dropdown-toggle ${
                        isActive ? "active" : ""
                      }`}
                    >
                      {menu.label}
                    </label>

                    <ul className={`dropdown-menu submenu-${idx}`}>
                      {isIndustries
                        ? [
                            "Insurance",
                            "Healthcare",
                            "Health & Wellness",
                            "Finance & Banking",
                            "Everyday & Leisure Travel",
                            "Business & Corporate Travel",
                            "Payment Services",
                            "Group Experiences & Events",
                            "Bespoke & Luxury Journeys",
                            "Remittance",
                            "Forex",
                            "Gift Cards & Vouchers",
                            "Remittance",
                            "Education",
                          ].map((label, i) => (
                            <li
                              key={i}
                              className={i === 6 || i === 13 ? "borgnone" : ""}
                            >
                              <Link
                                className="dropdown-item"
                                to="#"
                                onClick={closeAllMenus}
                              >
                                <div className="insobox">
                                  <div className="menuicon">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/menuiocn${
                                        i + 1
                                      }.svg`}
                                      alt={`Icon ${i + 1}`}
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `${process.env.PUBLIC_URL}/images/default.svg`;
                                      }}
                                    />
                                  </div>
                                  <p>{label}</p>
                                </div>
                              </Link>
                            </li>
                          ))
                        : menu.label === "About us"
                        ? menu.items.map((item, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                className="dropdown-item"
                                to={item.path}
                                onClick={closeAllMenus}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))
                        : menu.items.map((item, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                className="dropdown-item"
                                to={`/${menu.label
                                  .toLowerCase()
                                  .replace(/ /g, "-")}/${item
                                  .toLowerCase()
                                  .replace(/ /g, "-")
                                  .replace(/&/g, "and")}`}
                                onClick={closeAllMenus}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="d-flex align-items-center nav-icons position-relative rightseach">
            <button
              className="btn searchbut"
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

            <Link to="#" className="ms-2">
              <i className="bi bi-globe2 coloriconb"></i>
            </Link>

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
