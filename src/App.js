import { Routes, Route } from 'react-router-dom';
import './Style.css';
import Home from './home/Home';
import Overview from './about/Overview';
import Mediadetails from './mediareleases/Mediadetails';
import Ebixnext from './ebixnext/Ebixnext';
import Payment from './payment/Payment';
import Error from './Error/Error'; 


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ebixreact' element={<Home />} />
       <Route path="/about/overview" element={<Overview />} />
       <Route path="/mediadetails/mediadetails" element={<Mediadetails />} />
       <Route path="/ebixnext" element={<Ebixnext/>} />
       <Route path="/industries/payment" element={<Payment/>} />
       
       
         {/* 404 fallback route */}
       <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
