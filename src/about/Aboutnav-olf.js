import React, { useEffect, useRef, useState } from "react";

const Aboutnav = () => {
  const aboutRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyProps, setStickyProps] = useState(null);
  const [originalOffset, setOriginalOffset] = useState(0);
  const [activeSection, setActiveSection] = useState("overview"); // default

  const navLinks = [
    { label: "Overview", targetId: "overview" },
    { label: "Industry Expertise", targetId: "industry" },
    { label: "Our Reach", targetId: "reach" },
    { label: "Our Core Values", targetId: "ourcorevalues" },
    { label: "Our Mission", targetId: "ourmission" },
  ];

  const getTotalNavHeight = () => {
    const topNav = document.querySelector(".topnav");
    const mainNav = document.querySelector(".navnew");
    const topNavH = topNav ? topNav.getBoundingClientRect().height : 0;
    const mainNavH = mainNav ? mainNav.getBoundingClientRect().height : 0;
    return topNavH + mainNavH;
  };

  useEffect(() => {
    if (aboutRef.current) {
      const totalNavHeight = getTotalNavHeight();
      const rect = aboutRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setOriginalOffset(rect.top + scrollY - totalNavHeight);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!aboutRef.current) return;

      const totalNavHeight = getTotalNavHeight();

      // Sticky nav
      if (window.scrollY >= originalOffset) {
        const rect = aboutRef.current.getBoundingClientRect();
        setStickyProps({
          top: totalNavHeight,
          left: rect.left + window.scrollX,
          height: rect.height,
          width: rect.width,
        });
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setStickyProps(null);
      }

      // Scroll spy: find section in view
      let currentSection = activeSection;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.targetId);
        if (section) {
          const sectionTop = section.offsetTop - totalNavHeight - 20;
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

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId); // highlight immediately
    const target = document.getElementById(targetId);
    if (target) {
      const totalNavHeight = getTotalNavHeight();
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - totalNavHeight - 10;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
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
          <li><span>|</span></li>
        </ul>
      </nav>

      {isSticky && stickyProps && (
        <div style={{ height: `${stickyProps.height}px` }} />
      )}
    </>
  );
};

export default Aboutnav;
