import Header from '../commentemplate/Header';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Banner from '../about/Banner';
import Footer from '../commentemplate/Footer';


const Mediadetails = () => {
  const id = "overview";
  const heading = "Training Over Termination: A Human-Centered Path for India’s IT";
  const imageSrc = `${process.env.PUBLIC_URL}/images/happening2.png`;
  const imageAlt = "EbixCash";

  return (
    <>
      <Header />
      <Breadcrumb />
      <Banner />

      <div className="container-fluid px-5 mediadetails custpx" id={id}>
        <div className="row justify-content-center align-items-start">
        <h6><i>22 May 2025</i></h6>
  <h2 className='mb-5'>{heading}</h2>
          {/* TEXT COLUMN */}
          <div className="col-lg-7 col-md-7">
          

            <p>In India’s IT sector today, we are seeing large companies cut thousands of mid- and seniorlevel jobs—many held by people who have been with their organisations for 15 or even 20 years...</p>

            <h3>A Partner, Not a Threat</h3>
            <p>One of the biggest misconceptions today is that AI will replace humans completely...</p>

            <h3>Over Termination</h3>
            <p>The best way to handle change is to prepare people for it...</p>

            <p>The most sacred book we follow when it comes to moral and human relationships, the
              <strong> Bhagavad Gita,</strong> says: “Those who stand by you in your time of trial should never be betrayed.”...
            </p>

            <h3>A Call to Industry and Government</h3>
            <p>We believe the government also has a role to play...</p>
          </div>

          {/* IMAGE COLUMN */}
          <div className="col-lg-5 col-md-5 text-center">
            <img
              alt={imageAlt}
              src={imageSrc}
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

        </div>
      </div>

         <Footer />
    </>
  );
};

export default Mediadetails;
