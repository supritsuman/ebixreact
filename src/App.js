import { Routes, Route } from 'react-router-dom';
import './Style.css';
import Home from './home/Home';
import Overview from './about/Overview';
import Mediadetails from './mediareleases/Mediadetails';
import Error from './Error/Error'; 


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ebixreact' element={<Home />} />
       <Route path="/about/overview" element={<Overview />} />
       <Route path="/mediadetails/mediadetails" element={<Mediadetails />} />
       
         {/* 404 fallback route */}
       <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
