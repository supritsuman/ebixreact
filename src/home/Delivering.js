import { useEffect, useRef, useState } from "react";
import deliveringData from "../data/deliveringData";

const Delivering = () => {
  const { heading, description, button, videoSrc } = deliveringData;

  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // 30% section visible hone par trigger hoga
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Inline Animation CSS */}
      <style>{`
        .fade-left-section {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-left-section.visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div className="container-fluid px-5 bg1 deliveringbox custpx" ref={contentRef}>
        <div className="row justify-content-center">
          <div className={`col-lg-5 py-5 fade-left-section ${isVisible ? "visible" : ""}`}>
            <h2 className="mt-0 mt-md-5">{heading}</h2>
            <p className="mt-4">{description}</p>
            <div className="bannerreadmore">
              <a className="bannerbtn" href={button.link}>
                <span className="btn-content">
                  <span className="text-top">{button.textTop}</span>
                  <span className="text-bottom">{button.textBottom}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <video autoPlay muted loop className="deliveringvideo">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivering;
