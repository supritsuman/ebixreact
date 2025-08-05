
import careerBannerData from "../data/careerData";

const Careers = () => {
  const { image, heading, subheading, text, button } = careerBannerData;

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12 p-0">
          <div className="image-hover-box">
            <img src={image} alt="Hover Image" className="main-image" />
            <div className="image-hover-content">
              <h3>{heading}</h3>
              <h2>{subheading}</h2>
              <p>{text}</p>

              <div className="bannerreadmore">
                <a className="bannerbtn" href={button.link}>
                  <span className="btn-content">
                    <span className="text-top">{button.text}</span>
                    <span className="text-bottom">{button.text}</span>
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
