import { Link } from 'react-router-dom';
import Header from '../commentemplate/Header';
import Footer from '../commentemplate/Footer';

const Error = () => {
  return (
    <>
      <Header />

      <div className="container-fluid p-5 custpd text-center">

       <p className='mt-5'>   <img
    src={`${process.env.PUBLIC_URL}/images/page-not-found.gif`}
    alt="Page Not Found"
    style={{ width: '300px', maxWidth: '100%' }}
  /> </p>  
        
        
        <h3 className="mb-5" style={{ marginTop: '-50px' }}>  Sorry, this page doesn’t exist.
</h3>



          <div className="bannerreadmore">
              <Link className="bannerbtn" to="/">
                <span className="btn-content">
                  <span className="text-top">Go to Homepage</span>
                  <span className="text-bottom">Go to Homepage</span>
                </span>
              </Link>
            </div>

        </div>


      <Footer />
    </>
  );
};

export default Error;
