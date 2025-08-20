import Statssection from './Statssection';

const Ebixsmartclass = () => {
  return (
    <>
      <div className="container-fluid px-5 deliveringbox custpx ebixsmartbox" id='bbixsmartclass'>
        <div className="row justify-content-center">
          <div className="col-lg-9 py-5">
            <h2 className="mt-0 mt-md-5 text-center">Ebix SmartClass</h2>
            <p className="mt-4 text-center">
              Ebix SmartClass is revolutionizing K–12 education across India through NEP
              2020-aligned digital content, experiential learning, and modern classroom
              infrastructure. With a presence in over 12,000 schools and an impact on
              more than 2.5 million students, SmartClass empowers educators and learners
              through immersive digital classrooms, subject-specific labs, and hands-on
              STEM solutions. It is a step toward democratizing quality education for
              every learner, everywhere.
            </p>

            <div className="bannerreadmore text-center">
              <a className="bannerbtn" href="#">
                <span className="btn-content">
                  <span className="text-top">Read More →</span>
                  <span className="text-bottom">Read More →</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <Statssection />
      </div>
    </>
  );
};

export default Ebixsmartclass;
