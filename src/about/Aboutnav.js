import React, { useEffect, useRef, useState } from "react";

const Aboutnav = () => {
  const aboutRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyProps, setStickyProps] = useState(null);
  const [originalOffset, setOriginalOffset] = useState(0);

  // Function to get total nav height (topnav + main nav)
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

      // Store original offset from document top
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
           <li>|</li>
          <li className="active">Overview</li>
           <li>|</li>
          <li>Industry Expertise</li>
           <li>|</li>
          <li>Our Reach</li>
           <li>|</li>
          <li>Leadership</li>
           <li>|</li>
          <li>Core Values</li>
           <li>|</li>
        </ul>
      </nav>

      {/* Placeholder div so layout doesn't jump */}
      {isSticky && stickyProps && (
        <div style={{ height: `${stickyProps.height}px` }} />
      )}
    </>
  );
};

export default Aboutnav;
