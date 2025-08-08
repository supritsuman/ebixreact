import { Routes, Route } from 'react-router-dom';
import './Style.css';
import Home from './home/Home';
import Overview from './about/Overview';
import Error from './Error/Error'; 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path="/about/overview" element={<Overview />} />
       
         {/* 404 fallback route */}
       <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
