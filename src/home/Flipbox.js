import flipboxData from '../data/flipboxData'; 

const Flipbox = () => {
  return (
    <div className="row mt-5">
      {flipboxData.map((item, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="flip-box">
            <div className="flip-box-inner">
              {/* Front Side */}
              <div className="flip-side flip-front">
                <img src={item.image} alt={item.title} className="flipimg" />
                <div className="overlay">
                  <h2>{item.title}</h2>
                  <div className="technologylink">
                    {item.frontLinks.map((link, i) => (
                      <span key={i}>
                        <img src={link.icon} width={15} alt={link.label} /> {link.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-side flip-back">
                <img src={item.image} className="flipimg" alt={item.title} />
                <div className="overlay">
                  <h2>{item.title}</h2>
                  <p>{item.backText}</p>
                  <div className="tereadmore text-start">
                    <a className="read-more-btn" href="#">
                      <span className="arrow">
                        <img src="./images/icon5.svg" alt="arrow" />
                      </span>{' '}
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flipbox;
