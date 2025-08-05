import { useEffect, useRef } from "react";
import Flipbox from "./Flipbox";

const Whatwedo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll(".fade-slide");
          if (entry.isIntersecting) {
            elements.forEach((el) => el.classList.add("visible"));
            // Stop observing after first trigger
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Good for mobile and desktop
      }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container-fluid p-5 custpd">
      <div className="whtwedohd" id="next-section" ref={sectionRef}>
        <h2 className="fade-slide delay-1">What We Do</h2>
        <p className="fade-slide delay-2">
          Ebix is a diversified technology powerhouse offering mission-critical
          digital infrastructure <br /> across four domains:
        </p>
        <Flipbox />
      </div>
    </div>
  );
};

export default Whatwedo;
