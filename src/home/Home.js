
import Header from '../commentemplate/Header';
import Homebanner from './Homebanner';
import Whatwedo from './Whatwedo';
import Delivering from './Delivering';
import Companydata from './Companydata';
import Ourbrands from './Ourbrands';
import Whathappening from './Whathappening';
import Careers from './Careers';
import Footer from '../commentemplate/Footer';

const Home = () => {

   return (
    <>
      <Header />
      <Homebanner />
      <Whatwedo/>
      <Delivering />
      <Companydata />
      <Ourbrands/>
      <Whathappening />
      <Careers/>
      <Footer/>
    </>
   )
}



export default Home;
