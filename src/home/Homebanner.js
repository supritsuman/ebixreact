import { useEffect, useState } from "react";

const Homebanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 4;

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const carouselEl = document.getElementById("myCarousel");
    const counterEl = document.getElementById("carouselSlideCounter");

    const updateCounter = () => {
      const items = Array.from(carouselEl.querySelectorAll(".carousel-item"));
      const newIndex = items.findIndex((el) => el.classList.contains("active"));
      setActiveIndex(newIndex);

      if (counterEl) {
        counterEl.innerHTML = `
          <span class="counter-current">${newIndex + 1}</span>
          <span class="counter-slash">/</span>
          <span class="counter-total">${items.length}</span>
        `;
      }
    };

    if (carouselEl) {
      carouselEl.addEventListener("slid.bs.carousel", updateCounter);
      updateCounter(); // initial
    }

    return () => {
      if (carouselEl) {
        carouselEl.removeEventListener("slid.bs.carousel", updateCounter);
      }
    };
  }, []);

  const videoSrc = `${process.env.PUBLIC_URL}/video/banner.mp4`;
  const rightArrow = `${process.env.PUBLIC_URL}/images/rightarrow.png`;
  const leftArrow = `${process.env.PUBLIC_URL}/images/leftarrow.png`;
  const downArrow = `${process.env.PUBLIC_URL}/images/downarrow.gif`;

  return (
    <>
      <div className="w-100 homeslideboxmain">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            <div className="container-fluid px-5">
              {[...Array(totalItems)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {[...Array(totalItems)].map((_, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <video autoPlay muted loop className="videoInsert">
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="caption-wrapper d-flex align-items-center">
                  <div className="container-fluid text-start text-white px-5">
                    <div className="row">
                      <div className="col-lg-8 bannerleft">
                        <p>Empowering Enterprises Through</p>
                        <h1>
                          Innovation <br /> scale <span>& </span>partnership
                        </h1>
                      </div>
                      <div className="col-lg-4 homebannerright">
                        <p>
                          Ebix is a global enterprise technology powerhouse, delivering transformative digital
                          solutions that reshape how businesses, institutions, and governments operate in a connected
                          world. With operations in 50+ countries and a team of over 10,000 professionals, Ebix is a
                          trusted partner across diverse sectors including insurance, finance, healthcare, education,
                          travel, and public services.
                        </p>
                        <div className="bannerreadmore">
                          <a className="bannerbtn" href="#">
                            <span className="btn-content">
                              <span className="text-top">Read More →</span>
                              <span className="text-bottom">Read More →</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls and Counter */}
          <div className="container-fluid px-5">
            <div className="carouselboxin position-relative d-flex align-items-center justify-content-between px-4">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
                disabled={activeIndex === 0}
                style={{
                  opacity: activeIndex === 0 ? 0.3 : 1,
                  pointerEvents: activeIndex === 0 ? "none" : "auto",
                }}
              >
                <span className="carousel-control-prev-icon">
                  <img src={rightArrow} width={35} alt="Prev" />
                </span>
              </button>

              <span
                id="carouselSlideCounter"
                className="carousel-counter text-white position-absolute top-50 start-50 translate-middle d-flex align-items-baseline"
              >
                <span className="counter-current">{activeIndex + 1}</span>
                <span className="counter-slash">/</span>
                <span className="counter-total">{totalItems}</span>
              </span>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
                disabled={activeIndex === totalItems - 1}
                style={{
                  opacity: activeIndex === totalItems - 1 ? 0.3 : 1,
                  pointerEvents: activeIndex === totalItems - 1 ? "none" : "auto",
                }}
              >
                <span className="carousel-control-next-icon">
                  <img src={leftArrow} width={35} alt="Next" />
                </span>
              </button>
            </div>
          </div>

          {/* Down Arrow Scroll */}
          <div className="downarrow" onClick={handleScroll}>
            <img src={downArrow} alt="Scroll Down" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
