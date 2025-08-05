import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ourbrands = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true, // turn this off so we can use manual pause
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  const brandImages = [
    { src: "brands1.png", link: "http://www.ebixcashworldmoney.com" },
    { src: "brands2.png", link: "https://in.via.com" },
    { src: "brands3.png", link: "https://www.mercurytravels.co.in" },
    { src: "brands4.png", link: "https://www.ebixsmartclass.com" },
    { src: "brands5.png", link: "https://www.zillious.com/" },
    { src: "brands6.png", link: "https://www.adam.com" },
    { src: "brands7.png", link: "https://www.ahataxis.com" },
    { src: "brands8.png", link: "https://routier.in" }
  ];

  const handleBrandClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="ourbrandbox">
      <div className="container-fluid p-5">
        <h2 className="text-center mb-3">Our Brands</h2>
        <p className="text-center mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      <div
        className="container-fluid"
        onMouseEnter={() => sliderRef.current?.slickPause()}
        onMouseLeave={() => sliderRef.current?.slickPlay()}
      >
        <Slider ref={sliderRef} {...settings}>
          {brandImages.map((brand, index) => (
            <div key={index} className="brand-slide px-3">
              <img
                src={`/images/${brand.src}`}
                alt={`Brand ${index + 1}`}
                className="img-fluid brand-img"
                style={{ cursor: "pointer" }}
                onClick={() => handleBrandClick(brand.link)}
              />
            </div>
          ))}
        </Slider>

        <div className="w-100 text-center mt-4 mb-5">
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
  );
};

export default Ourbrands;
