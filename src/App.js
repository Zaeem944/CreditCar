// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NavbarComp from './components/NavbarComp';
import AvailableCars from './components/AvailableCars';
import AddCar from './components/AddCar';
import Confirmation from './components/Confirmation';

function App() {

  const Layout = ({ children }) => {
    return (
      <>
        <NavbarComp />
        {children}
      </>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CreditCar/" element={<Login/>} />
        <Route path="/CreditCar/confirmation" element={<Confirmation/>} />
        <Route path="/CreditCar/home" element={<Layout><Home /></Layout>} />
        <Route path="/CreditCar/rentACar" element={<Layout><AvailableCars /></Layout>} />
        <Route path="/CreditCar/addACar" element={<Layout><AddCar /></Layout>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
