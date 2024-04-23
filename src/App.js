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
        <Route path="https://zaeem944.github.io/CreditCar/driving-app/" element={<Login/>} />
        <Route path="https://zaeem944.github.io/CreditCar/driving-app/confirmation" element={<Confirmation/>} />
        <Route path="https://zaeem944.github.io/CreditCar/driving-app/home" element={<Layout><Home /></Layout>} />
        <Route path="https://zaeem944.github.io/CreditCar/driving-app/rentACar" element={<Layout><AvailableCars /></Layout>} />
        <Route path="https://zaeem944.github.io/CreditCar/driving-app/addACar" element={<Layout><AddCar /></Layout>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
