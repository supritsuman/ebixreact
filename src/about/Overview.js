import React, { useEffect, useState, useRef } from "react";
import Header from '../commentemplate/Header';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Banner from './Banner';
import Aboutnav from './Aboutnav';
import Globalenterprise from './Globalenterprise';
import Industryslider from './Industryslider';
import Mindsbehind from './Mindsbehind';
import Ourcore from './Ourcore';
import WorldMap from './WorldMap';
import Ourmission from './Ourmission';
import Footer from '../commentemplate/Footer';

const Overview = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [isInRange, setIsInRange] = useState(
    window.innerWidth >= 1000 && window.innerWidth < 1800
  );
  const isInRangeRef = useRef(isInRange);

  useEffect(() => {
    isInRangeRef.current = isInRange;
  }, [isInRange]);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const inRange = width >= 1000 && width < 1800;
      setIsInRange(inRange);
      setIsSticky(inRange); // enable sticky only if in range
    }

    function handleScroll() {
      if (!isInRangeRef.current) return; // ignore if not in range
      if (window.scrollY > 50) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initialize once
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isInRange) {
    // Outside 1000-1600 range: render normally with no sticky
    return (
      <>
        <Header />
        <Breadcrumb />
        <Banner />
        <Aboutnav />
        <div>
          <Globalenterprise />
          <Industryslider />
          <Mindsbehind />
          <Ourcore />
          <WorldMap />
          <Ourmission />
          <Footer />
        </div>
      </>
    );
  }

  // Width between 1000 and 1600px: sticky enabled
  return (
    <>
      <div
        style={{
          position: isSticky ? "fixed" : "relative",
          top: 0,
          left: 0,
          right: 0,
          height: isSticky ? "100vh" : "auto",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <Header />
        <Breadcrumb />
        <Banner />
        <Aboutnav />
      </div>

      <div
        style={{
          marginTop: isSticky ? "100vh" : 0,
          transition: "margin-top 0.3s ease",
        }}
      >
        <Globalenterprise />
        <Industryslider />
        <Mindsbehind />
        <Ourcore />
        <WorldMap />
        <Ourmission />
        <Footer />
      </div>
    </>
  );
};

export default Overview;
