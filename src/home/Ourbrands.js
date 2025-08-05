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

const Ourbrands = () => {
  return (
    <div className="ourbrandbox">
      <div className="container-fluid p-5 custpd">
        <h2 className="text-center mb-3 mt-3 mt-md-5">Our Brands</h2>
        <p className="text-center mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="brand-slider-wrapper">
        <div className="brand-slider">
          {[...brandImages, ...brandImages].map((brand, index) => (
            <div key={index} className="brand-slide">
              <a href={brand.link} target="_blank" rel="noopener noreferrer">
                <img src={`/images/${brand.src}`} alt={`Brand ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>

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
  );
};

export default Ourbrands;
