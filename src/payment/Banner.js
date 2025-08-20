import { useEffect } from "react";

const Banner = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className="w-100 homeslideboxmain aboutbanner">
        <div id="myCarousel" className="carousel slide">
          {/* Single Slide */}
          <div className="carousel-inner">
            <div className="carousel-item active">
             <img src={`${process.env.PUBLIC_URL}/images/payments-banner.png`} className="videoInsert" />

              <div className="caption-wrapper d-flex align-items-center">
                <div className="container-fluid text-start text-white px-5">
                  <div className="row">
                    <div className="col-lg-12 bannerleft">
                      <p>EBIX Payments</p>
                      <h1>
                        Shaping the <br />
                        Future, Today
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
