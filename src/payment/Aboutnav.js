import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Aboutnav = () => {
  const aboutRef = useRef(null);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [stickyProps, setStickyProps] = useState(null);
  const [originalOffset, setOriginalOffset] = useState(0);
  const [activeSection, setActiveSection] = useState("overview");

  const navLinks = [
    { label: "Overview", targetId: "overview" },
    { label: "Globetrotter Travel Card", targetId: "globettravelcard" },
    { label: "Airport Forex Operations", targetId: "airportforexo" },
    { label: "Institutional Forex Enablement", targetId: "institutional" },
    { label: "Financial Inclusion Network", targetId: "network" },
   
  ];

  // Only main nav height (skip topnav)
  const getMainNavHeight = () => {
    const mainNav = document.querySelector(".navnew");
    return mainNav ? mainNav.getBoundingClientRect().height : 0;
  };

  // Sticky original offset
  useEffect(() => {
    if (aboutRef.current) {
      const mainNavHeight = getMainNavHeight();
      const rect = aboutRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setOriginalOffset(rect.top + scrollY - mainNavHeight);
    }
  }, []);

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, [location.hash]);

  // Scroll spy + sticky
  useEffect(() => {
    const onScroll = () => {
      if (!aboutRef.current) return;

      const mainNavHeight = getMainNavHeight();

      // Sticky
      if (window.scrollY >= originalOffset) {
        const rect = aboutRef.current.getBoundingClientRect();
        setStickyProps({
          top: mainNavHeight,
          left: rect.left + window.scrollX,
          height: rect.height,
          width: rect.width,
        });
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setStickyProps(null);
      }

      // Scroll spy
      let currentSection = activeSection;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.targetId);
        if (section) {
          const sectionTop = section.offsetTop - mainNavHeight - 20;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = link.targetId;
          }
        }
      });
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [originalOffset, activeSection, navLinks]);

  // Scroll function
  const scrollToSection = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      const mainNavHeight = getMainNavHeight();
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - mainNavHeight - 10;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  // Nav click
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <>
      <nav
        ref={aboutRef}
        className={`about-nav ${isSticky ? "sticky" : ""}`}
        style={
          isSticky && stickyProps
            ? {
                position: "fixed",
                top: `${stickyProps.top}px`,
                left: `${stickyProps.left}px`,
                width: `${stickyProps.width}px`,
                zIndex: 1000,
              }
            : {}
        }
      >
        <ul>
          <li className="label">NAVIGATE TO</li>
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              <li><span>|</span></li>
              <li>
                <a
                  href={`#${link.targetId}`}
                  onClick={(e) => handleNavClick(e, link.targetId)}
                  className={activeSection === link.targetId ? "active" : ""}
                >
                  {link.label}
                </a>
              </li>
            </React.Fragment>
          ))}
 
        </ul>
      </nav>

      {isSticky && stickyProps && (
        <div style={{ height: `${stickyProps.height}px` }} />
      )}
    </>
  );
};

export default Aboutnav;
