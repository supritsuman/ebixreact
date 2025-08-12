
const Globalenterprise  = () => {
  return (
    <div className="container-fluid px-5 deliveringbox2 custpx" id="overview">
      <div className="row justify-content-center">
        <div className="col-lg-6 ">
          <h2>
            Ebix is a global enterprise technology powerhouse, delivering
            transformative digital solutions that reshape how businesses,
            institutions, and governments operate in a connected world.
          </h2>
          <p className="mt-4">
            At the heart of Ebix lies a clear purpose: to enable convergence
            bringing together disparate systems, stakeholders, and services into
            unified, intelligent ecosystems. Our platforms are designed not just
            to digitize existing processes, but to completely reimagine how
            industries function in a digital-first future.
          </p>
        </div>

        <div className="col-lg-5 d-flex align-items-center justify-content-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/glob.gif`}
            alt="EbixCash"
            className="glob"
          />
        </div>
      </div>
    </div>
  );
};

export default Globalenterprise;
