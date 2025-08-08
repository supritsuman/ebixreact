import { useEffect } from "react";

const Banner = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videoSrc = `${process.env.PUBLIC_URL}/video/about.mp4`;

  return (
    <>
      <div className="w-100 homeslideboxmain aboutbanner">
        <div id="myCarousel" className="carousel slide">
          {/* Single Slide */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video autoPlay muted loop className="videoInsert">
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div className="caption-wrapper d-flex align-items-center">
                <div className="container-fluid text-start text-white px-5">
                  <div className="row">
                    <div className="col-lg-12 bannerleft">
                      <p>Empowering Enterprises Through</p>
                      <h1>
                        Innovation, Scale <br />
                        and Partnership
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
