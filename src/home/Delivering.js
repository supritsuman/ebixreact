import deliveringData from "../data/deliveringData"; 


const Delivering = () => {
  const { heading, description, button, videoSrc } = deliveringData;

  return (
    <>
      <div className="container-fluid px-5 bg1 deliveringbox custpx">
        <div className="row justify-content-center">
          <div className="col-lg-5 py-5">
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
