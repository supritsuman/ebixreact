import React, { useEffect, useRef, useState } from "react";

const Aboutnav = () => {
  const aboutRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyProps, setStickyProps] = useState(null);
  const [originalOffset, setOriginalOffset] = useState(0);

  // Navigation links data (dynamic)
  const navLinks = [
    { label: "Overview", href: "#", active: true },
    { label: "Industry Expertise", href: "#" },
    { label: "Our Reach", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Core Values", href: "#" },
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

      if (window.scrollY >= originalOffset) {
        const rect = aboutRef.current.getBoundingClientRect();
        setStickyProps({
          top: totalNavHeight,
          left: rect.left + window.scrollX,
          height: rect.height,
          width: rect.width, // ✅ Added width
        });
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setStickyProps(null);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [originalOffset]);

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
                  href={link.href}
                  className={link.active ? "active" : ""}
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
