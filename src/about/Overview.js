
import Header from '../commentemplate/Header';
import Footer from '../commentemplate/Footer';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Banner from './Banner';
import Aboutnav from './Aboutnav';
import Ourcore from './Ourcore';
import Mindsbehind from './Mindsbehind';
import Globalenterprise from './Globalenterprise';
import Ourmission from './Ourmission';
import Industryslider from './Industryslider';

const Overview = () => {
  return (
    <>
           <Breadcrumb />
           <Header />
           <Banner />
           <Aboutnav />
           <Globalenterprise />
           <Industryslider />
           <Mindsbehind />
           <Ourcore />
           <Ourmission/>
           <Footer/>
    </>
  );
};

export default Overview;
