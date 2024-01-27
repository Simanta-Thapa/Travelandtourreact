
import './App.css';

import Navbar from './Components/navbar/navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Booking from './Pages/Booking';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contactus' element={<ContactUs/>}/>
    <Route path='booking' element={<Booking/>}/>
    </Routes>

    </BrowserRouter>



    </div>
  );
}

export default App;
