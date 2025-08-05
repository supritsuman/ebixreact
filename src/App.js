import './Style.css';
import Header from './commentemplate/Header';
import Homebanner from './home/Homebanner';
import Whatwedo from './home/Whatwedo';
import Delivering from './home/Delivering';
import Companydata from './home/Companydata';
import Ourbrands from './home/Ourbrands';
import Whathappening from './home/Whathappening';
import Careers from './home/Careers';
import Footer from './commentemplate/Footer';

const App = () => {
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
  );
};

export default App;